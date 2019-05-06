<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-content: center;
}

a {
  text-decoration: none;
  color: navy;
  font-size: 24px;
  padding: 16px;
  margin: 12px;
}
</style>
