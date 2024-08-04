<template>
  <Layout page="Альбомы">
    <v-row class="content">
      <v-col cols="12">
        <main-title>Альбомы</main-title>
        <div class="albums-container">
          <album-item v-for="album in albums" :album="album" :key="album.id"></album-item>
        </div>
      </v-col>
    </v-row>
  </Layout>
</template>

<script setup>
import AlbumItem from '@/components/audio/AlbumItem.vue';
import { onMounted, ref } from 'vue';
import albums from '../mock/albums';
import artists from '../mock/artists';

/* TODO: HARDCODE!!!! DELETE WHER U FINALLY GET BACKEND */
onMounted(() => {
  albums.map((album) => {
      const artist = artists.find((artist) => artist.id === album.artistId);
      album.artist = artist;
    })
  }
);

</script>

<style lang="scss">
.albums-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>