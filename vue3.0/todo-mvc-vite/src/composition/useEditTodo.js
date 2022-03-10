import { ref, computed } from "vue";

export default function useEditTodo (todoRef) {
  const currentEditItemRef = ref(null); // 当前修改的那一项
  let originTitle = null;
  const editTodoItem = (todoItem, e) => {
    originTitle = todoItem.title;
    currentEditItemRef.value = todoItem;
    e.target.parentElement.nextSibling.focus();
  }
  const exitEdit = (todoItem) => {
    currentEditItemRef.value = null;
    const title = todoItem.title.trim();
    if(!title) {
      todoRef.value.splice(todoRef.value.indexOf(todoItem), 1);
    }else {
      todoItem.title = title;
    }
  }
  const cancelEdit = (todoItem) => {
    currentEditItemRef.value = null;
    todoItem.title = originTitle;
  }
  const allDone = computed({
    get() {
      return todoRef.value.every((item) => item.completed);
    },
    set(checked) {
      todoRef.value.forEach((todo) => {
        todo.completed = checked;
      });
    }  
  })
  return {
    editTodoItem,
    currentEditItemRef,
    exitEdit,
    cancelEdit,
    allDone,
  }
}