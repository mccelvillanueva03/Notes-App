// install express@4.18.2
// add "type": "module" in package.json to use ES6 modules
// run the server with: node server.js
// or add a script in package.json: "dev": "node server.js" and run with: npm run dev

import express from 'express';

const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You got 5 notes");
});  


app.listen(5001, () => {
    console.log("Server started on port 5001");
}); 