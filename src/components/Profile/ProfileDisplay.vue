<template>
  <div class="profile-display">
    <div class="profile-display-header">
      <img
        :src="user.photoURL"
        alt="UserAVI"
        class="profile-display-header__user-avi"
        width="80"
        height="80"
      />
      <h1 class="profile-display-header__user-display-name">
        {{ user.displayName }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfileDisplay',
  computed: {
    ...mapGetters(['user']),
  },
};
</script>

<style lang="scss" scoped>
.profile-display {
  margin: auto;
  background: crimson;
  margin: 2rem;
  padding: 4px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(8, 35, 51, 0.05) 0px 3px 6px;
  .profile-display-header {
    display: flex;
    align-items: center;
    &__user-display-name {
      margin-left: 16px;
    }
  }
}
</style>
