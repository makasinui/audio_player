<template>
  <header class="header">
    <v-app-bar color="#0b0b31" class="container" :elevation="2">
      <template #prepend>
        <v-toolbar-title>{{ page }}</v-toolbar-title>
      </template>
      <div>
        <v-icon icon="search"></v-icon>
        <user-profile />
      </div>
      </v-app-bar>
    <left-navigation />
  </header>
</template>

<script setup>
import LeftNavigation from './LeftNavigation.vue';
import UserProfile from './UserProfile.vue';

defineProps({
  page: String
})
</script>

<style lang="scss">
.header {
  .v-toolbar__content {
    padding: 0 20px;
  }
}
</style>