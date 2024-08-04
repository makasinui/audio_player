<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering || instance === stateInstance ? '#ff506d' : '#070827'"
        flat
        @click="playAudio"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="w-100">
            <v-card-title class="text-h5 card-main">
              <div>
                <v-avatar size="50" :rounded="0">
                  <v-img
                    :src="image"
                    :class="isHovering ? 'card-img__hovering' :''"
                  >
                  
                </v-img>
                <v-icon
                  v-if="isHovering" 
                  :icon="isPlaying && stateInstance === instance ? 'pause' : 'play_arrow'" 
                  size="50" 
                  class="hovering_play"
                />
                </v-avatar>
              </div>
              <div class="card-name">
                <div class="card-title">{{ trackName }}</div>
                <div class="card-subtitle">{{ artist.name }}</div>
              </div>
              <div class="card-actions">
                <span class="time">2:47</span>
                <div class="icons">
                  <v-hover>
                    <template #default="{ isHovering, props }">
                      <v-icon
                        v-bind="props"
                        size="large"
                        class="favorite-icon"
                        :icon="isHovering ? 'favorite' : 'favorite_border'"
                      />
                    </template>
                  </v-hover>
                  <v-icon size="large" class="add-icon" icon="add" />
                </div>
              </div>
            </v-card-title>
          </div>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex'

import { getImageSrc } from '@/helpers';

const store = useStore();
const props = defineProps({
  artist: Object,
  img: String,
  trackName: String,
  trackUrl: String,
  album: Object || undefined,
  favorite: Boolean
});

const isPlaying = computed(() => store.getters['isPlayingNow']);
const stateInstance = computed(() => store.getters['getInstance']);

const image = getImageSrc(props.img ?? props.album.img);
const instance = ref(new Audio(new URL(`../../assets/audio/${props.trackUrl}`, import.meta.url)));

const playAudio = () => {
  store.dispatch('startPlaying', {props, instance: instance.value});
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.v-card,
.icons {
  transition: $transition;
}

.v-card {
  width: 100%;
  border-radius: $border-radius;
}

.card {
  &-main {
    display: flex;
  }

  &-name {
    display: flex;
    width: 100%;
    margin-left: 15px;
    flex-direction: column;

    .card-title {
      @include card-title;
    }
    .card-subtitle {
      @include card-subtitle;
    }
  }

  &-actions {
    font-size: 12px;
    margin-right: auto;
    display: flex;
    align-items: center;

    .time {
      color: $secondary-color;
      padding-right: 35px;
    }

    .icons {
      display: flex;
      gap: 10px;
    }
  }

  &-img__hovering {
    filter: blur(2px);
  }
}

.hovering_play {
  position: absolute;
  color: $hover-color;
}
.v-card {
  cursor: pointer;
}

@media screen and (max-width: $media-sm) {
  .v-card {
    max-width: none;
    margin-left: 0;
    padding-left: 0;

    &-title {
      padding-left: 0;
    }
  }
}

@media screen and (max-width: $media-sm) {
  .v-card {
    &-title {
      .time {
        display: none;
      }
    }
  }
}
</style>
