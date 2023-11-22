<template>
    <div class="user-wrapper">
        <UserInfo
            v-for="user in user_data"
            :key="user._id"
            :user_info_data="user"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserInfo from './UserInfo.vue';

    export default {
        name: 'UserWrapper',
        components: {
            UserInfo
        },
        props: {
            user_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_USER_LIST_FROM_SERVER',
            ])
        }
    }
</script>

<style lang="scss">
    
</style>