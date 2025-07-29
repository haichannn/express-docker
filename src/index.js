import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({
        "message": "welcomee to my api"
    })
})

app.get('/about', (req, res) => {
    res.json({
        "message": "welcomee to about api"
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("application has started !")
})
