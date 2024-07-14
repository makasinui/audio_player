<template>
  <v-list nav>
    <v-list-item
      v-for="nav in navigation"
      :key="nav.id"
      :to="nav.link"
      color="primary"
    >
      <template #prepend>
        <v-icon :icon="nav.icon" />
      </template>
      <v-list-item-title> {{ nav.name }} </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
const navigation = [
  {
    id: 1,
    link: "/",
    name: "Главная",
    icon: "home",
  },
  {
    id: 2,
    link: "/",
    name: "Альбомы",
    icon: "album",
  },
  {
    id: 3,
    link: "/artists",
    name: "Музыканты",
    icon: "group",
  },
  {
    id: 4,
    link: "/my",
    name: "Моя музыка",
    icon: ""
  }
];
</script>
