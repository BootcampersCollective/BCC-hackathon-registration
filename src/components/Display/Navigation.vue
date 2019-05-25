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
    align-items: center;
    margin-left: 2rem;
    a {
        text-decoration: none;
        font-size: 18px;
        padding: 8px;
        margin: 6px;
    }
}
</style>
