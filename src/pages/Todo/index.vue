<script setup>
import { useTaskStore } from "../../stores/task";
import { storeToRefs } from "pinia";
const todo = useTaskStore();
const { task, tasks, filter, tasksFiltered } = storeToRefs(todo);
const { newTask, delTask, toggleDone } = todo;
</script>

<template>
  <section class="page">
    <div class="app">
      <h2>Create your task</h2>
      <div class="task-input">
        <input
          type="text"
          spellcheck="false"
          placeholder="Input your task here ..."
          v-model="task"
          @keyup.enter="newTask"
        />
        <button title="Add Task" @click="newTask">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div class="filter">
        <span>Filter :</span>
        <button
          class="ed"
          :class="{ active: filter == 'all' }"
          @click="filter = 'all'"
        >
          All
        </button>
        <button
          class="ed"
          :class="{ active: filter == 'active' }"
          @click="filter = 'active'"
        >
          Active
        </button>
        <button
          class="ed"
          :class="{ active: filter == 'completed' }"
          @click="filter = 'completed'"
        >
          Completed
        </button>
      </div>
      <p v-if="tasks.length === 0">Here is Your Task</p>
      <ul>
        <li class="task-item" v-for="task in tasksFiltered" :key="task.id">
          <input
            type="checkbox"
            @click="toggleDone(task)"
            :checked="task.isCompleted"
          />
          <span :class="{ done: task.isCompleted }">{{ task.name }}</span>
          <i
            class="fa-solid fa-trash-can"
            title="Delete Task"
            @click="delTask(task)"
          ></i>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: black;
}

.app {
  min-width: 25rem;
  max-width: 40rem;
  width: 100%;
  padding: 1rem;
}

h2,
p {
  color: white;
}

h2 {
  margin-bottom: 3rem;
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
}

.task-input {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem;
}

.task-input input {
  width: calc(100% - 3rem);
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  font-size: 0.9rem;
  padding: 0 0.75rem;
}

.task-input button {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: white;
  border: none;
  cursor: pointer;
}

i {
  color: black;
  font-size: 1rem;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

input {
  outline: none;
}

.task-item {
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.task-item span {
  width: calc(100% - 3rem);
  margin: 0 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.2rem;
}

.task-item input {
  width: 1rem;
  height: 1rem;
  border: 1px solid gray;
  border-radius: 50%;
  background-image: url("https://bit.ly/3NUeX3T");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  flex-shrink: 0.5rem;
  appearance: none;
}

.task-item input:hover {
  border-color: gray;
  box-shadow: 0 0 0 3px gainsboro;
}

.task-item input:checked {
  background-size: 0.5rem;
  border: 1px solid gray;
  background-color: gainsboro;
}

.done {
  text-decoration: line-through solid 2px;
}

.filter {
  margin-bottom: 1rem;
  color: white;
}

.filter span {
  font-size: 1.25rem;
}

.ed {
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.25rem 0.5rem;
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

.active {
  background-color: black;
  border: 2px solid white;
  color: white;
}
</style>
