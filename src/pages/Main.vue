<template>
  <Layout page="Главная">
    <v-row class="content">
      <v-col cols="12">
        <main-title>Последние альбомы</main-title>
        <div class="albums-container">
          <album-item></album-item>
          <album-item></album-item>
          <album-item></album-item>
          <album-item></album-item>
        </div>
      </v-col>
    </v-row>
    <v-row class="content">
      <v-col cols="6">
        <main-title>Чарт</main-title>
        <div class="audio-container">
          <track-item></track-item>
          <track-item></track-item>
          <track-item></track-item>
          <track-item></track-item>
        </div>
      </v-col>
      <v-col cols="6">
        <main-title>Плейлисты</main-title>
        <div class="playlist-container">
          <playlist-item></playlist-item>
          <playlist-item></playlist-item>
          <playlist-item></playlist-item>
          <playlist-item></playlist-item>
          <playlist-item></playlist-item>
          <playlist-item></playlist-item>

        </div>
      </v-col>
    </v-row>
    <current-track />
  </Layout>
</template>

<script setup>
import TrackItem from "@/components/audio/TrackItem.vue";
import PlaylistItem from "@/components/audio/PlaylistItem.vue";
import AlbumItem from '@/components/audio/AlbumItem.vue';
import CurrentTrack from "@/components/audio/CurrentTrack.vue";
</script>

<style lang="scss">
.audio-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.playlist-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.albums-container {
  display: flex;
  gap: 15px;
  overflow: hidden;
}
</style>
