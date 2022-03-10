import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../utils/todoStorage";

const statusList = ["all", "active", "completed"];

export default function useFilterTodo (todoRef) {
  const currentStatusRef = ref("all");
  const changeHash = () => {
    const currentHash = location.hash.replace(/#\/?/, "");
    if (!statusList.includes(currentHash)) {
      currentStatusRef.value = "all";
    } else{
      currentStatusRef.value = currentHash;
    }
  };
  
  onMounted(() => {
    window.addEventListener("hashchange", changeHash);
  });
  onUnmounted(() => {
    window.removeEventListener("hashchange", changeHash);
  });

  const filterTodoRef = computed(() => {
    return filter(todoRef.value, currentStatusRef.value);
  });

  const remainRef = computed(() => {
    return filter(todoRef.value, "active").length;
  })

  const completedRef = computed(() => {
    return filter(todoRef.value, "completed").length;
  })
   
  return {
    currentStatusRef,
    filterTodoRef,
    remainRef,
    completedRef,
  }
}
