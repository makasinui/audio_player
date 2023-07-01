<template>
  <header class="header">
    <v-app-bar color="#0b0b31" class="container" :elevation="2">
      <template #prepend>
         <v-app-bar-nav-icon variant="text" class="header-menu" @click.stop="open = !open"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ page }}</v-toolbar-title>
      </template>
      <div>
        <user-profile />
      </div>
      </v-app-bar>
    <left-navigation :open="open"/>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import LeftNavigation from './LeftNavigation.vue';
import UserProfile from './UserProfile.vue';

defineProps({
  page: String
})

const open = ref(false);
</script>

<style lang="scss">
.header {
  .v-toolbar__content {
    padding: 0 20px;
  }

  &-menu {
    display: none;

    @media screen and (max-width: 1279px) {
      display: block;
    }
  }
}
</style>