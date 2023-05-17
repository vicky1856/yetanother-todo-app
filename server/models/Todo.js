import mongoose from "mongoose";
mongoose.connect('mongodb+srv://vicky:12345@cluster0.kbprlzg.mongodb.net/backend_practice')
    .then(() => console.log('connected to mongodb'))
    .catch((err) => console.log(`${err} couldn't connect`))


const TodoSchema = new mongoose.Schema({
    // write your schema here
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
    // you can add more fields here
});

export const Todo = mongoose.model('Todo', TodoSchema);


