<template>
  <v-menu>
    <template #activator="{ props }">
      <v-avatar>
        <v-img></v-img>
      </v-avatar>
      <v-btn v-bind="props"> user.name </v-btn>
    </template>
    <v-list>
      <v-list-item>профиль</v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
</script>
