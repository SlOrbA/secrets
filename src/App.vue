<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="topic">
        <h2>What are Secrets? - and how to use them</h2>
      </div>
      <nav>
        <RouterLink to="/">Welcome</RouterLink>
        <RouterLink to="/definition">Definition</RouterLink>
        <RouterLink to="/automation">Automation</RouterLink>
        <RouterLink to="/future">Future</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed; /* Fixes the header at the top of the viewport */
  top: 0; /* Aligns the header at the top */
  width: 100%; /* Ensures the header spans the full width of the viewport */
  background-color: #fff; /* Optional: Sets a background color for the header */
  z-index: 1000; /* Ensures the header stays above other content */
}

topic {
  justify-content: center; /* Centers the flex items (nav links) horizontally */
  align-items: center;
}

nav {
  display: flex; /* Enables Flexbox for the nav element */
  justify-content: center; /* Centers the flex items (nav links) horizontally */
  align-items: center; /* Centers the flex items vertically */
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  gap: 1rem; /* Optional: Adds space between the nav links */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  topic {
    justify-content: center; /* Centers the flex items (nav links) horizontally */
    align-items: center;
  }  

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
