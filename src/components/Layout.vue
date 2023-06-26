<template>
  <v-app>
    <v-theme-provider theme="dark" class="pa-10">
      <Header :page="props.page" />
      <v-main>
        <v-container fluid class="container">
          <slot />
        </v-container>
      </v-main>
    </v-theme-provider>
  </v-app>
</template>

<script setup>
import Header from "./header/Header.vue";
const props = defineProps({
  page: String,
});
</script>

<style lang="scss">
.v-main {
  background: #070827;
}
</style>
