<script>
import { useAuthStore } from "./stores/auth";
export default {
  setup() {
    const auth = useAuthStore()
    return {auth}
  }
}
</script>

<template>
  <div>
    <div class="sidebar">
      <div class="side-brand">
          Pinia
      </div>
      <div class="side-menus">
        <router-link to="/" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-house-chimney"></i></span>
          <span class="side-text">Home</span>
        </router-link>
        <router-link to="/todo" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-list-check"></i></span>
          <span class="side-text">Todo</span>
        </router-link>
        <router-link to="/users" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-users"></i></span>
          <span class="side-text">Users</span>
        </router-link>
        <router-link v-if="!auth.signed" to="/login" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-right-to-bracket"></i></span>
          <span class="side-text">Login</span>
        </router-link>
        <a href="#" v-else to="/login" class="side-menu">
          <span class="side-icon rotate"><i class="fa-solid fa-right-to-bracket"></i></span>
          <span class="side-text">Logout</span>
        </a>
      </div>
    </div>
    <router-view class="view" />
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

:root {
  --general: #606062;
}

body {
  background-color: black;
  color: white;
  min-width: 640px;
}

.sidebar {
  position: fixed;
  inset: 0;
  width: 13rem;
  background: black;
  display: flex;
  flex-direction: column;
  border-right: .5rem solid white;
}

.side-brand {
  width: 100%;
  height: 8rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-menus {
  font-size: 1rem;
  width: 100%;
  font-weight: 500;
}

.side-menu {
  display: flex;
  padding: 1rem 0;
  text-decoration: none;
  color: white;
  transition: .2s ease-in;
}

.side-menu:hover, .router-link-exact-active {
  background-color: white;
  color: black;
  font-weight: bolder;
  cursor: pointer;
}

.side-icon {
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view {
  width: calc(100% - 13rem);
  transform: translateX(13rem);
  height: 100%;
  color: black;
}

.page {
  padding: 1.75rem;
  font-size: 2rem;
  font-weight: bold;
}

.rotate {
  transform: rotate(180deg);
}
</style>