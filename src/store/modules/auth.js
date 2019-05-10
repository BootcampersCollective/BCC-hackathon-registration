import firebase from 'firebase/app';
import 'firebase/auth';

export const state = {
  user: {},
};

export const getters = {
  user: state => state.user,
  loggedIn: state => 'uid' in state.user,
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  login() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('profile');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user: { uid }, additionalUserInfo: { profile, username } }) =>
        console.log(uid, profile, username),
      )
      .catch(error => console.log(error));
  },
  logout() {
    firebase.auth().signOut();
  },
};

export const actions = {
  fetchCredentials({ commit }) {
    console.log(`fetchCredentials()`);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        const { uid, displayName } = user;
        const cleanedUser = { displayName, uid };
        console.log(cleanedUser);
        commit('setUser', cleanedUser);
      } else {
        commit('setUser', {});
      }
    });
  },
};