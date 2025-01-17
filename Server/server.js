const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
// const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')

// app.post('/add', (req, res) => {
//     const task = req.body.task;
//     TodoModel.create({
//         task: task
//     }).then(result = res.json(result))
//     .catch(err = res.json(result))
// });

app.post('/add', (req, res) => {
    try {
        const data = req.body; 
        res.status(201).json({ message: 'Data added successfully', data });

    } catch (error) {
        console.error("Error in /add route:", error);  
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});
  

app.listen(3001, () => {
    console.log("Server is running")
})