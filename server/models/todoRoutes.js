import { Todo } from "./Todo.js";
const user = {
    text: 'posting text',
    complete: false
}
const obj = new Todo(user);
obj.save().then(() => {
    console.log('added to db');
})
    .catch((err) => {
        console.log(err);
    })