<template>
  <div id="app">
    <Header />
    <main id="app-view">
      <router-view />
    </main>
  </div>
</template>

<script>
import '@/styles/global.css';
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>
