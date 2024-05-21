const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("done!")
})

app.listen(8000, () => {
    console.log("Server running at - http://localhost:8000");
})