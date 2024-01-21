const express = require('express')
const dotenv = require('dotenv').config()
const pool = require('./db')
const cors = require('cors')

// middleware
const app = express()
app.use(express.json())

app.use(cors())

// insert
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newToDo = await pool.query("INSERT INTO todos (description) VALUES ($1) RETURNING *", [description])

        res.status(200).json(newToDo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

// get all todos
app.get('/todos', async(req, res) => {
    try {
        const allToDos = await pool.query("SELECT * FROM todos ORDER BY todo_id ASC")
        res.status(200).json(allToDos.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// get a specific to do by id
app.get('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`SELECT * FROM todos WHERE todo_id = ${id}`)
        res.status(200).json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

// update a to do
app.put('/todos/:id', async(req,res) => {
    try {
        const { id } = req.params
        const { description } = req.body

        // const updateToDo = await pool.query(`UPDATE todos SET description = ${description} WHERE id = ${id}`)
        const updateToDo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id])
        const result = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id])
        res.status(200).json(result.rows[0])
    } catch (error) {
        console.log(error.message)
    }   
})

// delete to do
app.delete('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params
        const deleteToDo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id])
        const allToDos = await pool.query("SELECT * FROM todos")
        res.status(200).json(allToDos.rows)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is listening to port: ${process.env.PORT}`)
})