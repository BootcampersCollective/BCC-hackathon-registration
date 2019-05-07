<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a href="http://slack.bootcamperscollective.com/" target="_blank">
      <i class="fab fa-slack" />
    </a>
    <a
      href="https://github.com/BadrChoubai/BCC-hackathon-registration"
      target="_blank"
    >
      <i class="fab fa-github" />
    </a>
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
  align-items: center;
  a {
    text-decoration: none;
    font-size: 18px;
    padding: 8px;
    margin: 6px;
  }
}
</style>
