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
                <p class="user-info__rating">Rating: {{ user_info_data.rating }}</p>
                <p class="user-info__total-income">Total income: {{ user_info_data.totalIncome }}</p>
            </v-card-text>
            <button class="user-info__view-more">View more details</button>
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
        box-shadow: #5E5DF0 0 10px 20px -10px;
        align-items: flex-start;    
    }
    .user-info__view-more {
        background: #5E5DF0;
        border-radius: 999px;
        margin: 10px auto;
        box-shadow: #5E5DF0 0 10px 20px -10px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 18px;
        border: 0;
        &:hover {
            color: #5E5DF0;
            background-color: #FFFFFF; 
        }
    }

    .user-info__jobs-title, .user-info__country, .user-info__phone, .user-info__rating, .user-info__total-income {
        text-align: left;
        margin-bottom: 10px;
    }

</style>