<template>
  <section class="app-container" id="app">
    <h1 class="app-header">My To Do List App</h1>
    <div class="add-task">
      <input type="text" spellcheck="false" placeholder="Input your task here ..." class="task-input" v-model="tasks.name" @keyup.enter="newTask">
      <input type="submit" value=" " class="submit-task" title="Add Task" @click="newTask">
    </div>
    <ul class="task-list">
        <li class="task-list-item" v-for="task in tasks" :key="task.id">
            <label class="task-list-item-label">
                <input type="checkbox">
                <span>{{ task.name }}</span>
            </label>
            <span class="delete-btn" title="Delete Task" @click="delTask(task)">{{ task.del }}</span>
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
        return {
            title: 'to do list',
            tasks: [],
        }
  },
  methods: {
      newTask() {
          if (!this.tasks.name) {
              return
          }
          this.tasks.push({
              name: this.tasks.name,
              del: '',
          });
          this.tasks.name = '';
      },
      delTask(task) {
          this.tasks.splice(this.tasks.indexOf(task), 1);
      }
  },
}
</script>
