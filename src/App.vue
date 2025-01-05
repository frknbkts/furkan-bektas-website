<template>
  <header>
    <nav class="navbar">
      <div class="nav-brand">Furkan Bektaş</div>
      <div class="nav-links">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/about">Hakkımda</router-link>
        <router-link to="/portfolio">Portfolyo</router-link>
        <router-link to="/experience">Deneyim</router-link>
        <router-link to="/contact">İletişim</router-link>
      </div>
    </nav>
  </header>

  <div class="page-container">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    
  </div>
</template>

<style>
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #3498db;
  --background-color: #121212;
  --surface-color: #1e1e1e;
  --text-color: #ffffff;
  --text-color-secondary: #b3b3b3;
  --border-color: #2d2d2d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  overflow-x: hidden;
  width: 100%;
}

.page-container {
  position: relative;
  min-height: 100vh;
  padding-top: 80px;
  width: 100%;
  overflow-x: hidden;
}

.navbar {
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: var(--secondary-color);
}

main {
  min-height: calc(100vh - 160px);
  padding: 2rem;
  width: 100%;
  position: relative;
}

footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: relative;
  bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-view-container {
  position: relative;
  width: 100%;
}
</style>
