<template>
  <button id="github-login-button" @click.prevent="loginWithGitHub">
    Login with GitHub
  </button>
</template>

<script>
import firebase from 'firebase';
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('profile');

provider.setCustomParameters({
  allow_signup: 'false',
});

export default {
  name: 'GitHubButton',
  methods: {
    loginWithGitHub() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);
        })
        .catch(function(error) {
          throw new Error(`
            There was an error
            ${error.messages}
          `);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  padding: 12px;
}

#github-login-button {
  background: #333;
  color: #fff;
  border-bottom: 2px solid #a033a0;
}
</style>
