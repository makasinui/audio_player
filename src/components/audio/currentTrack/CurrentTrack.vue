<template>
  <transition name="fade" mode="out-in">
    <div class="current-track" v-if="track">
      <current-track-card
        :artist="audio.artist.name"
        :img="audio.img ?? audio.album.img"
        :track-name="audio.trackName"
      />
      <div class="track-end">
        <div class="actions">
          <v-icon class="prev-track" icon="skip_previous" />
          <v-icon
            @click="playAudio"
            class="play"
            :icon="isPlaying ? 'pause_circle_outline' : 'play_circle_outline'"
          />
          <v-icon class="next-track" icon="skip_next" />
        </div>
        <div class="volume">
          <v-icon class="volume-icon" icon="volume_up" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, onMounted, watch } from "vue";

import CurrentTrackCard from "./CurrentTrackCard.vue";
const store = useStore();

const audio = computed(() => store.getters["getCurrentTrack"]);
const track = computed(() => store.getters["getInstance"]);
const isPlaying = computed(() => store.getters['isPlayingNow']);

const playAudio = () => {
  store.dispatch('startPlaying');
};
</script>

<style lang="scss">
@import "../../../styles/variables.scss";
@import '../../../styles/mixins.scss';

.current-track {
  position: fixed;
  bottom: 0;
  height: 80px;
  color: white;
  left: 0px;
  padding: 0 20px;
  z-index: 9999;
  background: $hover-color-rgba;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .track-end {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 14px;

    @media screen and (max-width: 505px) {
        gap: 15px;
    }
  }

  .prev-track, .next-track, .volume-icon {
    @include set-icon-width(30px, 25px, 505px);
  }

  .play {
    @include set-icon-width(35px, 25px, 505px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
