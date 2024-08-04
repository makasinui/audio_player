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
      <v-col cols="12" sm="12" xs="12" md="6">
        <main-title>Чарт</main-title>
        <div class="audio-container">
          <track-item 
            v-for="track in trackData" 
            :key="track.id"
            :album="track.album"
            :artist="track.artist"
            :img="track.img"
            :track-name="track.trackName"
            :track-url="track.url"
            :favorite="track.favorite"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" xs="12" md="6">
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
import CurrentTrack from "@/components/audio/currentTrack/CurrentTrack.vue";

import tracks from "../mock/audio";
import artists from "../mock/artists";
import albums from "../mock/albums";

import { onMounted, ref } from "vue";

/* TODO: мок данные удалить в будущем... */
const trackData = ref(tracks);
onMounted(() => {
  trackData.value.map((track) => {
    const artist = artists.find((item) => item.id === track.artistId);
    const album = albums.find((item) => item.id === track.albumId);

    track.artist = artist;
    track.album = album;
  })
})
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
  flex: 0 1 100%;
}
.albums-container {
  display: flex;
  gap: 15px;
  overflow: hidden;
}
</style>
