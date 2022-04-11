import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => ({
    task: "",
    tasks: [],
    filter: "all",
  }),
  getters: {
    tasksFiltered(state) {
      if (state.filter == "all") {
        return state.tasks;
      } else if (state.filter == "active") {
        return state.tasks.filter((item) => !item.isCompleted);
      } else if (state.filter == "completed") {
        return state.tasks.filter((item) => item.isCompleted);
      }
      return state.tasks;
    },
  },
  actions: {
    newTask() {
      this.tasks.push({
        name: this.task,
        isCompleted: false,
      });
      this.task = "";
    },
    delTask(item) {
      this.tasks.splice(item, 1);
    },
    toggleDone(item) {
      item.isCompleted = !item.isCompleted;
    },
  },
});
