<template>
  
  
      <v-card class="playlist-item" max-width="400">
        <v-img
          class="align-end text-white"
          height="150"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        >
          <v-card-title class="playlist-title">Summer vibes</v-card-title>
        </v-img>
      </v-card>
  
  
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.playlist-item {
    border-radius: $border-radius;
    cursor: pointer;
    min-width: 200px;
    .playlist-title {
        font-size: 16px;
        backdrop-filter: blur(12px);
    }

    &:hover {
        .playlist-title {
            transition: $transition;
            background: $hover-color-rgba;
        }
    }
}
</style>