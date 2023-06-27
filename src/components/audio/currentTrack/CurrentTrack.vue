<template>
    <div class="current-track">
        <current-track-card
            :artist="audio.artist"
            :img="audio.img"
            :track-name="audio.trackName"
        />
        <div class="track-end">
            <div class="actions">
                <v-icon size="30" icon="skip_previous"/>
                <v-icon @click="playAudio" size="35" :icon="playing ? 'pause_circle_outline' : 'play_circle_outline'"/>
                <v-icon size="30" icon="skip_next"/>
            </div>
            <div class="volume">
                <v-icon size="30" icon="volume_up"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed, onMounted, watch } from 'vue'

import CurrentTrackCard from './CurrentTrackCard.vue';
const store = useStore();

const audio = computed(() => store.getters['getCurrentTrack']);
const track = computed(() => store.getters['getInstance']);
const playing = ref(true);

const playAudio = () => {
    if(playing.value) {
        track.value.pause()
    } else {
        track.value.play()
    }

    playing.value = !playing.value;
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.current-track {
    position: fixed;
    bottom: 0;
    height: 80px;
    color: white;
    left: 0px;
    padding: 0 20px;
    z-index: 9999;
    background: $hover-color;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .track-end {
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 14px;
    }
}
</style>