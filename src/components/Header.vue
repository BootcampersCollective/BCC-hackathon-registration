<template>
  <header>
    <logo :width="100" :height="100" />
    <navigation />
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
export default {
  name: 'Header',
  components: {
    Navigation,
    Logo,
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
    display: block;
    text-align: center;
  }
}
</style>
