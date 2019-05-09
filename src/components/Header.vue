<template>
  <header>
    <div class="left">
      <logo :width="88" :height="88" />
      <navigation />
    </div>
    <div class="right">
      <github-button />
    </div>
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

  .left {
    display: inline-flex;
  }
}

@media (max-width: 500px) {
  header {
    width: 100%;
    text-align: center;
    flex-direction: column;
    .left {
      width: 80%;
      justify-content: space-between;
    }
    .right {
      width: 100%;
    }
  }
}
</style>
