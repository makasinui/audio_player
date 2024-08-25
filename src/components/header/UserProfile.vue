<template>
  <v-menu class="" v-if="token">
    <template #activator="{ props }">
      <v-avatar v-bind="props">
        <v-icon size="30" icon="account_circle"></v-icon>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item @click="logout">выйти</v-list-item>
    </v-list>
  </v-menu>
  <template v-else>
    <div class="user-profile__auth">
      <router-link class="auth__link" to="/register">Регистрация</router-link>
      <router-link class="auth__link" to="/login">Авторизация</router-link>
    </div>
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const logout = () => {
  store.dispatch('logout');
}

const token = computed(() => store.getters.getToken)
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.user-profile {
  &__auth {
    display: flex;
    gap: 15px;

    .auth__link:hover {
      transition: $transition;
      color: $hover-color;
    }
  }
}
</style>
