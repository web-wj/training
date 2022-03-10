export default function useFilterTodo (todoRef, status = 'all') {
  if (status === 'all') {
    return { todoRef };
  }
  const filterTodo = todoRef.value.filter((todoItem) => {
    todoItem.completed = status === 'completed'
  })
  return {
    filterTodo,
  }
}
