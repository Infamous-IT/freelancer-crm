<template>
    <div class="user-info">
        <v-card
            class="user-info__list mx-auto my-8"
            max-width="344"
            elevation="16"
        >
            <v-card-item>
            <v-card-title>
                <p class="user-info__fullname">{{ user_info_data.name }} {{ user_info_data.surname }}</p>
            </v-card-title>
            <v-card-subtitle>
                <p class="user-info__role">{{ user_info_data.role }}</p>
                <p class="user-info__jobs-title">My tech stack: <strong>{{ user_info_data.jobsTitle.join(', ') }}</strong></p>
            </v-card-subtitle>
            </v-card-item>
            <v-card-text>
                <p class="user-info__country">{{ user_info_data.country }}, {{ user_info_data.city }}</p>
                <p class="user-info__phone">{{ user_info_data.phone }}</p>
                <p class="user-info__rating">Rating: {{ user_info_data.rating }}</p>
                <p class="user-info__total-income">Total income: {{ user_info_data.totalIncome }}</p>
            </v-card-text>
            <v-btn>View more details</v-btn>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo',
        components: {},
        props: {
            user_info_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
    .user-info__list {
        display: flex;
        flex-direction: column;
        margin: 15px;
        padding: 15px;
        width: 300px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        align-items: flex-start;
        cursor: pointer;
    }

    .user-info__jobs-title, .user-info__country, .user-info__phone, .user-info__rating, .user-info__total-income {
        text-align: left;
        margin-bottom: 10px;
    }
</style>