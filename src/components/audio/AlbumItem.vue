<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-card @click="openAlbum" v-bind="props" :color="isHovering ? '#ff506d' : '#070827'" flat class="album-item" width="240">
        <v-img
          class="align-center album-img text-white"
          height="200"
          :src="image"
          cover
        >
            <div class="album-actions">
                <v-icon icon="play_arrow" class="play" size="50" />
            </div>
        </v-img>
        <v-card-title class="album-title">{{ album.name }}</v-card-title>
        <v-card-subtitle class="album-subtitle">{{ album.artist.name }}</v-card-subtitle>
      </v-card>
      <v-navigation-drawer color="#0b0b31" width="100%" v-if="isOpen" permanent location="right">
        <v-list>
          <v-list-item>
            Альбом <br> {{ album.name }}
          </v-list-item>
          <v-list-item v-for="track in album.tracks" :key="track.id">
            <track-item 
              :key="track.id"
              :album="album"
              :artist="album.artist"
              :img="track?.img"
              :track-name="track.name"
              :track-url="track.url"
              :favorite="track.favorite"
          />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </template>
  </v-hover>
</template>

<script setup>
import TrackItem from "@/components/audio/TrackItem.vue";

import { ref, onMounted } from 'vue';
import { getImageSrc } from '@/helpers/index.js';

const props = defineProps({
  album: Object
});

const isOpen = ref(false);

const openAlbum = () => {
  isOpen.value = !isOpen.value
}

const image = getImageSrc(props.album.img);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.album-item {
  cursor: pointer;
  padding: 20px 10px;
  border-radius: $border-radius;
  flex: 0 0 240px;

  .album-img {
    border-radius: $border-radius;
  }

  .album-actions {
    display: flex;
    visibility: hidden;
    justify-content: center;

    .v-icon.play {
        border-radius: 50%;
        padding: 30px;
        backdrop-filter: blur(12px) brightness(0.3);
    }
  }
  .album-title {
    @include card-title;
    & {
      padding-left: 0;
    }
  }

  .album-subtitle {
    @include card-subtitle;
    & {
      padding-left: 0;
    }
  }

  &:hover, &:active {
    .album-actions {
      visibility: visible;
    }
  }
}
</style>
