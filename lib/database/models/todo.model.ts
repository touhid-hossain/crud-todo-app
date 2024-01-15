import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'User'},
    task: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
})

const Todo = models.Todo || model('Todo', TodoSchema);
export default Todo;