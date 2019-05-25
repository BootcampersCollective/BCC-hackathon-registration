<template>
    <form class="profile-form">
        <h2 class="profile-form__header">Create a profile</h2>
        <fieldset class="profile-form__inputs">
            <label for="bio">
                About Yourself:
                <textarea v-model="userProfileInfo.bio" type="text" />
            </label>
            <label for="website">
                Your Website:
                <input v-model="userProfileInfo.website" type="text" />
            </label>
            <label for="skills">
                Skills:
                <small>(seperated by commas)</small>
                <input v-model="userProfileInfo.skills" type="text" />
            </label>
            <button
                @click.prevent="
                    createUserProfile({
                        uid: user.user.uid,
                        profileInfo: userProfileInfo,
                    })
                "
            >
                Create Profile
            </button>
        </fieldset>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'ProfileForm',
    data() {
        return {
            userProfileInfo: {
                bio: '',
                website: '',
                skills: '',
            },
        };
    },
    methods: {
        ...mapMutations(['createUserProfile']),
    },
    computed: {
        ...mapState(['user']),
    },
};
</script>

<style lang="scss" scoped>
form {
    margin: 2rem;
    padding: 4px 16px;
    background: #fff;
    border-radius: 8px;
    box-shadow: rgba(8, 35, 51, 0.05) 0px 3px 6px;
    h2 {
        font-size: 32px;
        height: 60px;
        border-bottom: solid 2px #333;
        width: 260px;
    }
    fieldset {
        display: flex;
        flex-direction: column;
        input,
        textarea {
            width: 100%;
            font-size: 16px;
            padding: 4px;
        }
        textarea {
            height: 64px;
            font-family: monospace;
        }
        button {
            background: #0084b1;
            box-shadow: 0 1px 1px #666;
            color: #fff;
            font-size: 14px;
            border: none;
            width: 120px;
            height: 35px;
            margin: 16px 0;
        }
    }
}
</style>
