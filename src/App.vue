<template>
  <div id="app">
    <Header />
    <main id="app-view">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import '@/styles/global.css';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
