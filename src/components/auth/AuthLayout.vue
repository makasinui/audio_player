<template>
    <v-app>
        <v-theme-provider theme="dark" class="pa-10">
            <Header :left-navigation="false" :page="props.page" />
            <v-main>
                <v-container fluid class="container auth-page">
                    
                    <v-card
                        elevation="8"
                        min-width="448"
                        rounded="lg"
                        class="form"
                    >
                    <v-card-title align="center">{{ props.page }}</v-card-title>
                        <slot />
                    </v-card>
                </v-container>
            </v-main>
        </v-theme-provider>
    </v-app>
</template>

<script setup>
import Header from "./Header.vue";
const props = defineProps({
    page: String,
});
</script>

<style lang="scss">
.v-main {
    background: #070827;

    .auth-page {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        .form {
            padding: 15px;
        }
    }
}
</style>
