<template>
    <div class="user-list">
        {{ title }}
    </div>
    <h2>User List</h2>
    <p v-if="!USERS.length">There are no users in this apps now!</p>
    <div class="user-list">
        <UserWrapper 
            v-if="USERS.length"
            :user_data="USERS"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserWrapper from './UserWrapper.vue';

    export default {
        name: 'UserList',
        components: {
            UserWrapper,
        },
        data() {
            return {
                title: 'Freelancer User Component!'
            }
        },
        computed: {
            ...mapGetters([
                'USERS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_USER_LIST_FROM_SERVER'
            ])
        },
        mounted() {
            this.GET_USER_LIST_FROM_SERVER();
        }
    }
</script>

<style lang="scss">
    
</style>