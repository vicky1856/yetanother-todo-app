import { Todo } from './Todo.js'


export async function getData() {
    console.log('getdata');
    let data = await Todo.find();
    return data;
}
export function newTodo(str) {
    const newtodo = new Todo(str);
    newtodo.save()
        .then(data => console.log(`${data} saved`))
        .catch(err => console.log(`${err}`))

}

export async function deleteTodo(id) {
    let deleteData = await Todo.findIdAndRemove(id);
    return deleteData;

}
export function updateStatus(id, change) {
    let update = Todo.findOneAndUpdate({ 'id': id }, change, { 'new': true });
    return update;
}