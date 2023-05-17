import express from 'express';
import cors from 'cors';
// import { getData, newTodo, deleteTodo, updateStatus } from '../models/Routes.js';
import { getData, newTodo, deleteTodo, updateStatus } from './models/Routes.js';
const app = express();

app.use(express.json());
app.use(cors());



app.get('/todos', async (req, res) => {
    const data = await getData();
    res.send(data);
});



app.post('/todo/new', (req, res) => {
    const todo = {
        text: req.body.text,
        complete: false
    };

    const display = newTodo(todo);

    res.send(display);
});


app.delete('/todo/delete/:id', (req, res) => {
    const id = req.params.id;
    const deleteData = deleteTodo(id);
    res.send(deleteData);
});


app.put('/todo/complete/:id', async (req, res) => {
    const id = req.params.id;
    const change = { complete: req.body.complete }
    const updateStat = await updateStatus(id, change);
    res.send(updateStat);
});

app.listen(5000, () => console.log("Server is running on port 5000"));


