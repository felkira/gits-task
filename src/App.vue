<template>
  <section class="app">
        <h1>Create your task</h1>
        <div class="task-input">
            <input type="text" spellcheck="false" placeholder="Input your task here ..." v-model="task" @keyup.enter="newTask">
            <button title="Add Task" @click="newTask"><i class="fa-solid fa-plus"></i></button>
        </div>
        <p v-if="tasks.length === 0">Here is Your Task</p>
        <ul>
            <li class="task-item" v-for="task in tasks" :key="task.id">
                <input type="checkbox">
                <span>{{ task }}</span>
                <i class="fa-solid fa-trash-can" title="Delete Task" @click="delTask(item)"></i>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  data() {
        return {
            task: '',
            tasks: [],
        }
  },
  methods: {
      newTask() {
          this.tasks.push(this.task);
          this.task = ''
      },
      delTask(item) {
          this.tasks.splice(item, 1);
      }
  },
}
</script>
