<template>
  <section class="app">
        <h1>Create your task</h1>
        <div class="task-input">
            <input type="text" spellcheck="false" placeholder="Input your task here ..." v-model="tasks.name" @keyup.enter="newTask">
            <button title="Add Task" @click="newTask"><i class="fa-solid fa-plus"></i></button>
        </div>
        <ul>
            <li class="task-item" v-for="task in tasks" :key="task.id">
                <input type="checkbox">
                <span>{{ task.name }}</span>
                <i class="fa-solid fa-trash-can" title="Delete Task" @click="delTask(task)">{{ task.del }}</i>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  data() {
        return {
            tasks: [
                {name: 'Here is your task'},
            ],
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
