const express = require('express')
const app = express()
let cors = require("cors")
app.use(
    cors({
        origin: "http://localhost:8082",
    }),
);
app.post("/", async (req, res) => {
    return res.json({data: "meow"})
})
app.get("/", async (req, res) => {
    res.send("hi")
})
app.listen(8081, () => console.log("Api started"))
