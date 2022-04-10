<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { storeToRefs } from 'pinia';
const auth = useAuthStore();
const { user } = storeToRefs(auth);
const router = useRouter();
const logout = () => {
  auth.logout();
  router.push('/');
};
</script>

<template>
    <section class="page">
        <div class="app">
            <h2>Profile</h2>
            <h3>Nama: {{ user.name }}</h3>
            <h3>Email: {{ user.email }}</h3>
            <button @click="logout">Logout</button>
        </div>
    </section>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
}

.app {
    border: 2px solid white;
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
}

h2 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
}

h3 {
    font-size: .8rem;
    margin-bottom: .65rem;
    text-align: left;
}

button {
    width: 100%;
    height: 1.75rem;
    background-color: white;
    color: black;
    font-size: .8rem;
    font-weight: bold;
    border: none;
    margin-top: .5rem;
    border-radius: .2rem;
    cursor: pointer;
}

button:hover {
    filter: opacity(95%);
}

button:active {
    filter: opacity(95%);
    border: 1px solid black;
}
</style>