<script setup>
import { useUserStore } from "../../stores/user"
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const user = useUserStore();
const { users } = storeToRefs(user);
const { getAllUsers } = user;

onMounted(() => {
  getAllUsers();
});
</script>

<template>
    <section class="page">
        <div class="app">
            <h2>Users List</h2>
            <table cellspacing="7rem" cellpadding="5rem">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td class="id">{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>
.page {
    background-color: black;
    color: white;
    min-width: 640px;
}

.app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

h2 {
    margin-bottom: 3rem;
    font-size: 2rem;
}

table {
    font-size: .75rem;
}

thead {
    background-color: white;
    color: black;
}

th {
    border-bottom: 2px solid black;
    padding: .5rem;
    font-size: .9rem;
}

td {
    border: 2px solid white;
}

th, td {
    border-radius: .25rem;
}

button {
    border: none;
    background-color: white;
    border-radius: .25rem;
    height: 1.5rem;
    width: 1.7rem;
    margin: 0 .2rem;
    cursor: pointer;
}

button:hover {
    border: 2px solid white;
    filter: opacity(95%);
}

button:active {
    filter: opacity(90%);
}

.id {
    width: 2.5rem;
    display: flex;
    justify-content: center;
    padding: .65rem;
}

i {
    color: white;
    font-size: .75rem;
}

.edit {
    background-color: dodgerblue;
}

.delete {
    background-color: crimson;
}
</style>