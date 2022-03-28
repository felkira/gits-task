<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="sidebar">
      <div class="side-brand">
          GPP
      </div>
      <div class="side-menus">
        <router-link to="/" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-house-chimney"></i></span>
          <span class="side-text">Dashboard</span>
        </router-link>
        <router-link to="/profitability" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-chart-line"></i></span>
          <span class="side-text">Profitability Report</span>
        </router-link>
        <router-link to="/cost" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-coins"></i></span>
          <span class="side-text">Project Cost Report</span>
        </router-link>
        <router-link to="/logtime" class="side-menu">
          <span class="side-icon"><i class="fa-solid fa-business-time"></i></span>
          <span class="side-text">Logtime Report</span>
        </router-link>
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

body {
  background-color: white;
  color: white;
}

.sidebar {
  position: fixed;
  inset: 0;
  width: 15rem;
  background: black;
  display: flex;
  flex-direction: column;
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
  width: calc(100% - 15rem);
  transform: translateX(15rem);
  height: 100%;
  color: black;
}

.page {
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
}
</style>