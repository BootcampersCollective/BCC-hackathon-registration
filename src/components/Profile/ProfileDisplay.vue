<template>
    <div class="profile-display">
        <div class="profile-display-header">
            <div class="profile-display-header__left">
                <img
                    :src="user.photoURL"
                    alt="UserAVI"
                    class="profile-display-header__left__user-avi"
                    width="80"
                    height="80"
                />
                <h1 class="profile-display-header__left__user-display-name">
                    {{ user.displayName }}
                </h1>
            </div>
            <div class="profile-display-header__right">
                <a :href="profile.website" target="_blank"
                    >My Website <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>

        <div class="profile-display-body">
            <p class="profile-display-body__user-bio">
                {{ profile.bio }}
            </p>
            <ul class="profile-display-body__user-skills">
                <li v-for="skill in profile.skills.split(',')" :key="skill">
                    {{ skill }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ProfileDisplay',
    computed: {
        ...mapGetters(['user', 'profile']),
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
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        &__left {
            display: flex;
            align-items: center;

            &__user-display-name {
                margin-left: 16px;
            }
        }
        &__right {
            a {
                font-size: 14px;
            }
        }
    }

    .profile-display-body {
        padding: 0 16px;
        &__user-bio {
            font-size: 24px;
        }
        &__user-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            font-size: 18px;
        }
    }
}
</style>
