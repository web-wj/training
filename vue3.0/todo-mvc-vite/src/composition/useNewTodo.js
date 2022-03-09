import { ref } from "vue";
import { generateKey } from '../utils/todoStorage';

export default function useNewTodo (todoRef) {
  const newTodoRef = ref(''); // 新任务标题

  const addTodo = () => {
    const title = newTodoRef.value;
    const todo = {
      key: generateKey(),
      title,
      completed: false,
    };
    
    todoRef.value.push(todo);
    newTodoRef.value = "";
  };

  return {
    newTodoRef,
    addTodo,
  }
}