<template>
  <Layout page="Главная">
    <v-row class="content">
      <v-col cols="12">
        <main-title>Последние альбомы</main-title>
        <div class="albums-container">
          <album-item
            v-for="album in albumsData"
            :key="album.id"
            :album="album"
          />
          
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
            :track-name="track.name"
            :track-url="track.url"
            :favorite="!!track.user_tracks.length"
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
  </Layout>
</template>

<script setup>
import TrackItem from "@/components/audio/TrackItem.vue";
import PlaylistItem from "@/components/audio/PlaylistItem.vue";
import AlbumItem from '@/components/audio/AlbumItem.vue';

import { onMounted, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const trackData = ref();
const albumsData = ref();

onMounted(async() => {
  trackData.value = await store.dispatch('getAllTracks');
  albumsData.value = await store.dispatch('getAllAlbums');
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
