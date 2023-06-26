<template>
  <v-card color="#070827" flat class="album-item" width="220">
    <v-img
      class="align-center album-img text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >   
        <div class="album-actions">
            <v-icon icon="play_arrow" class="play" size="50" />
        </div>
    </v-img>
    <v-card-title class="album-title">Summer vibes</v-card-title>
    <v-card-subtitle class="album-subtitle">Ellie Ellie</v-card-subtitle>
  </v-card>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.album-item {
  cursor: pointer;
  padding: 20px 0;
  border-radius: $border-radius;
  flex: 0 0 220px;

  .album-img {
    border-radius: $border-radius;
  }

  .album-actions {
    display: flex;
    justify-content: center;

    .v-icon.play {
        border-radius: 50%;
        padding: 30px;
        backdrop-filter: blur(12px) brightness(0.3);
    }
  }
  .album-title {
    @include card-title;
    padding-left: 0;
  }

  .album-subtitle {
    @include card-subtitle;
    padding-left: 0;
  }

  &:hover {
    
  }
}
</style>
