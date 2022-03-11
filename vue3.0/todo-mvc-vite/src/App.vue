<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          v-model="newTodoRef"
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        >
      </header>
      <section v-show="filterTodoRef.length > 0" class="main">
        <input
          id="toggle-all"
          v-model="allDone"
          class="toggle-all"
          type="checkbox"
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            v-for="todoItem in filterTodoRef"
            :key="todoItem.id"
            class="todo"
            :class="{
              'completed': todoItem.completed,
              'editing' : currentEditItemRef === todoItem
            }"
            @dblclick="editTodoItem(todoItem, $event)"
          >
            <div class="view">
              <input v-model="todoItem.completed" class="toggle" type="checkbox">
              <label>{{ todoItem.title }}</label>
              <button class="destroy" @click="removeItem(todoItem)" />
            </div>
            <input
              v-model="todoItem.title"
              class="edit"
              type="text"
              @blur="exitEdit(todoItem)"
              @keyup.enter="exitEdit(todoItem)"
              @keyup.escape="cancelEdit(todoItem)"
            >
          </li>
        </ul>
      </section>
      <footer class="footer">
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
          v-show="completedRef > 0"
          class="clear-completed"
          style="display: none"
          @click="removeAllCompleted"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from './composition/useTodoList';
import useNewTodo from './composition/useNewTodo';
import useFilterTodo from './composition/useFilterTodo';
import useEditTodo from './composition/useEditTodo';
import useRemoveTodo from './composition/useRemoveTodo';

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
