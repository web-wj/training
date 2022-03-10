export default function useRemoveTodo (todoRef) {
  const removeItem = (todoItem)=> {
    todoRef.value.splice(todoRef.value.indexOf(todoItem), 1);
  }
  const removeAllCompleted = () => {
    todoRef.value = todoRef.value.filter((todoItem) => !todoItem.completed);
  }
  return {
    removeItem,
    removeAllCompleted,
  }
}