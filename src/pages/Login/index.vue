<script setup>
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
const auth = useAuthStore();
const router = useRouter();
const { email, password, error } = storeToRefs(auth);
const onSubmit = () => {
  error.value = '';
  const res = auth.login(email.value, password.value);
  if (res) {
    router.push('/profile');
  } else {
    error.value = '*Invalid Email or Password!';
  }
};
</script>

<template>
    <section class="page">
        <div class="app">
            <div class="form-content">
                <h4>Login</h4>
                <form @submit.prevent="onSubmit" class="sign">
                    <div class="row">
                        <span><i class="fa-solid fa-user"></i></span>
                        <label for="email"></label>
                        <input v-model="email" type="email" name="username" placeholder="Your email here ...">
                    </div>
                    <div class="row">
                        <span><i class="fa-solid fa-key"></i></span>
                        <label for="password"></label>
                        <input v-model="password" type="password" name="password" placeholder="Your password here ...">
                    </div>
                    <button>Submit</button>
                    <div v-if="error" class="error">{{ error }}</div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page {
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.form-content {
    border: 2px solid white;
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
}

.sign {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
}

.row input {
    margin-left: .5rem;
    border-radius: .2rem;
    border: none;
    outline: none;
    padding: .25rem;
}

span {
    width: 1.75rem;
    height: 1.75rem;
    background-color: white;
    color: black;
    border-radius: .2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
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

.error {
    font-size: .75rem;
    color: crimson;
    margin-top: 1rem;
}
</style>