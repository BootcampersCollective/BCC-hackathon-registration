import firebase from 'firebase/app';

export const state = {
  currentUser: null,
};

export const getters = {
  getCurrentUser: state => {
    state.currentUser = firebase.auth().currentUser;
  },
};

export const mutations = {
  setCurrentUser: state => {
    return state.currentUser;
  },
};

export const actions = {
  SET_CURRENT_USER: context => {
    context.commit('setCurrentUser');
  },
};
