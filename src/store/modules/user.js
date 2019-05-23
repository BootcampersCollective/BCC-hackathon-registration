import { db } from '@/firebase.init';
import firebase from 'firebase/app';
import 'firebase/auth';

export const state = {
  user: {},
  profile: {},
};

export const getters = {
  user: state => state.user,
  profile: state => state.profile,
  loggedIn: state => 'uid' in state.user,
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setProfile(state, payload) {
    state.profile = payload;
  },
  loginWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('profile');
    firebase.auth().signInWithPopup(provider);
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
        const { uid, displayName, email, photoURL } = user;
        const cleanedUser = { uid, displayName, email, photoURL };
        commit('setUser', cleanedUser);

        var userProfileReference = db.collection('profiles').doc(uid);
        var userProfile = userProfileReference
          .get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });

        console.log(userProfile);
      } else {
        commit('setUser', {});
        commit('setProfile', {});
      }
    });
  },
};
