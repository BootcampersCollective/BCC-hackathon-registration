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
import Header from '@/components/Display/Header.vue';
import Footer from '@/components/Display/Footer.vue';
export default {
    components: {
        Header,
        Footer,
    },
};
</script>
