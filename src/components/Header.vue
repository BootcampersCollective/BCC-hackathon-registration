<template>
  <header>
    <logo :width="200" :height="200" />
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

<style lang="scss" scoped></style>
