<template>
    <div class="freelancer-wrapper">
        <UserList/>
    </div>
</template>

<script>
import UserList from './user/UserList.vue';
    export default {
        name: 'FreelancerWrapper',
        components: {   
            UserList
        },
    }
</script>

<style lang="scss">
    
</style>