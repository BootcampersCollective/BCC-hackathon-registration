<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a
      id="slack-link"
      href="http://slack.bootcamperscollective.com/"
      target="_blank"
      >BCC on Slack!</a
    >
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
    color: navy;
    font-size: 18px;
    padding: 8px;
    margin: 6px;
  }
}
</style>
