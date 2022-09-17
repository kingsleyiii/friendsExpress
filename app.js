const express = require('express');
const app = express();
const port = 3000;
 const db = require('./friends')

app.get('/', (req, res) => {
    res.send("Hello from express")
})

app.get('/friends', (req, res) => {
    let htmlString = ' '
    htmlString += `<ul>`;
    let friendItem = db.map(friend => {
        htmlString += `<li>
        <a href"/${friend.handle}s/"${friend.name}</li>`
    })
    htmlString += `</ul`
    res.send(htmlString);
   
})
app.listen(port, ( )=> {
    console.log(`Yo Joe! Coming in hot on http://localhost:${port}`)

})

app.get(`/friends/:handle`, (req, res) => {
    const {handle} = req.params
    const friend = db.find(person => person.handle === handle)
    console.log("My friend: ")
    if (friend) {
        let htmlData = ``;
        htmlData += `<h1>${friend.name}</h1>`
        htmlData += `<h3>${friend.handle}</h1>`
        htmlData += `<h3>${friend.skill}</h3>`
        htmlData += `<a href="/friends"><button>Go Back</button></a>`
    } else {
        res.send(`Sorry, no friend is found with the handle ${handle}`)
    }
})