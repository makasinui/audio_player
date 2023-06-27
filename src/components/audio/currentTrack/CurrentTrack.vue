<template>
    <div class="current-track">
        <current-track-card></current-track-card>
        <div class="track-end">
            <div class="time">
                3:25
            </div>
            <div class="actions">
                <v-icon size="30" icon="skip_previous"/>
                <v-icon size="35" icon="play_circle_outline"/>
                <v-icon size="30" icon="skip_next"/>
            </div>
            <div class="volume">
                <v-icon size="30" icon="volume_up"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import CurrentTrackCard from './CurrentTrackCard.vue';
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