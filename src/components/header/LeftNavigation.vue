<template>
  <v-navigation-drawer class="left-menu" color="#0b0b31" location="left">
    <menu-list />
  </v-navigation-drawer>

  <v-navigation-drawer
    v-model="props.open"
    temporary
    class="left-menu__mobile"
    color="#0b0b31"
    location="left"
  >
    <menu-list />
  </v-navigation-drawer>
</template>

<script setup>
import MenuList from "./MenuList.vue";

const props = defineProps({
  open: Boolean,
});
</script>

<style lang="scss">
.left-menu {
  &__mobile {
    display: none !important;
  }
  @media screen and (max-width: 1279px) {
    display: none;

    &__mobile {
      display: flex !important;
    }
  }
}
</style>
