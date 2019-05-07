<template>
  <header>
    <logo :width="88" :height="88" />
    <navigation />
    <github-button />
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import GitHubButton from './GitHubButton';

export default {
  name: 'Header',
  components: {
    Navigation,
    Logo,
    'github-button': GitHubButton,
  },
};
</script>

<style lang="scss" scoped>
header {
  height: auto;
  box-shadow: 0 1px 4px #333;
  padding: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 500px) {
  header {
    width: 100%;
    text-align: center;
  }
}
</style>
