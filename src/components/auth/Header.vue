<template>
    <header class="header-auth">
        <v-app-bar color="#0b0b31" class="container header-auth__container">
            <div class="title">
                <v-toolbar-title>{{ page }}</v-toolbar-title>
            </div>
        </v-app-bar>
    </header>
</template>

<script setup>
defineProps({
    page: String,
});
</script>

<style lang="scss">
.header-auth {
    .v-toolbar__content {
        padding: 0 20px;
    }

    .title {
        width: 100%;
        text-align: center;
    }
}
</style>
