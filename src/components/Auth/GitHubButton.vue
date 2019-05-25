<template>
    <div>
        <div v-if="loggedIn">
            <router-link to="/profile">{{ user.displayName }}</router-link>
            <button @click="logout">Logout</button>
        </div>
        <button
            v-if="!loggedIn"
            id="github-login-button"
            @click.prevent="loginWithGithub"
        >
            Login with GitHub
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'GitHubButton',
    methods: {
        ...mapMutations(['loginWithGithub', 'logout']),
    },
    computed: {
        ...mapGetters(['user', 'loggedIn']),
    },
    created() {
        return this.$store.dispatch('fetchCredentials');
    },
};
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    border: none;
    padding: 12px;
}

#github-login-button {
    background: #333;
    color: #fff;
    border-bottom: 2px solid #a033a0;
}
#github-logout-button {
    background: #333;
    color: #fff;
    border-bottom: 2px solid #a033a0;
}
</style>
