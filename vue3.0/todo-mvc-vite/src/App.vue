<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="filterTodoRef.length > 0">
        <input 
          id="toggle-all" 
          class="toggle-all" 
          type="checkbox"
          v-model="allDone"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li 
            class="todo" 
            :class="{ 
              'completed': todoItem.completed,
              'editing' : currentEditItemRef === todoItem
            }" 
            v-for="todoItem in filterTodoRef" 
            :key="todoItem.id"
            @dblclick="editTodoItem(todoItem, $event)"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todoItem.completed"/>
              <label>{{ todoItem.title }}</label>
              <button class="destroy" @click="removeItem(todoItem)"></button>
            </div>
            <input 
              class="edit" 
              type="text" 
              v-model="todoItem.title" 
              @blur="exitEdit(todoItem)" 
              @keyup.enter="exitEdit(todoItem)"
              @keyup.escape="cancelEdit(todoItem)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="filterTodoRef.length > 0">
        <span class="todo-count">
          <strong>{{ remainRef }}</strong>
          <span>item{{ remainRef > 1 ? 's' : '' }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ 'selected': currentStatusRef === 'all' }">All</a>
          </li>
          <li>
            <a href="#/active" :class="{ 'selected': currentStatusRef === 'active' }">Active</a>
          </li>
          <li>
            <a href="#/completed" :class="{ 'selected': currentStatusRef === 'completed' }">Completed</a>
          </li>
        </ul>
        <button 
          class="clear-completed" 
          style="display: none" 
          v-show="completedRef > 0"
          @click="removeAllCompleted"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilterTodo from "./composition/useFilterTodo";
import useEditTodo from "./composition/useEditTodo";
import useRemoveTodo from "./composition/useRemoveTodo";

export default {
  setup() {
    const { todoRef } = useTodoList();
    return {
      todoRef,
      ...useNewTodo(todoRef),
      ...useFilterTodo(todoRef),
      ...useEditTodo(todoRef),
      ...useRemoveTodo(todoRef),
    };
  },
};
</script>
