import { ref, watchEffect } from "vue";
import * as todoStorage from '../utils/todoStorage';

export default function useTodoList() {
  const todoRef = ref(todoStorage.fetch());
  window.todoRef = todoRef;
  watchEffect(()=> {
    // todoRef 响应式数据，这个参数函数依赖响应数据
    todoStorage.save(todoRef.value);
  });
  return {
    todoRef,
  }
}