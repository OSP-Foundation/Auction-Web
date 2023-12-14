import expresss from 'express';
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.PORT || 5000

const app = expresss()

app.listen(port, () => {
    console.log("Server Started")
})