const LOCAL_KAY = "todomvc";

/**
 * 获取目前所有的任务
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KAY);
  if(result) {
    return JSON.parse(result);
  }
  return [];
}

/**
 * 保存当前的 todo 列表
 * @param {*} todos 当前需要保存的 todo 列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KAY, JSON.stringify(todos));
}

/**
 * 生成一个唯一标识，时间戳 + 随机4位字符串
 */
export function generateKey() {
  return Date.now() + Math.random().toString(16).substring(2, 4);
}

/**
 * 通过状态过滤 todos
 * @param {*} todos 所有的 todos 
 * @param {*} status 当前的状态
 * @returns 
 */
export function filter(todos, status) {
  if (status === "all") {
    return todos;
  } else if (status === "active") {
    return todos.filter((item) => !item.completed);
  } else if (status === "completed") {
    return todos.filter((item) => item.completed);
  }
  throw new Error("invalid status value!");
}