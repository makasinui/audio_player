<template>
  <Layout page="Альбомы">
    <v-row class="content">
      <v-col cols="12">
        <main-title>Альбомы</main-title>
        <div class="albums-container">
          <album-item 
            v-for="album in albumsData" 
            :album="album" 
            :key="album.id" 
          />
        </div>
      </v-col>
    </v-row>
  </Layout>
</template>

<script setup>
import AlbumItem from '@/components/audio/AlbumItem.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const albumsData = ref();

onMounted(async() => {
  albumsData.value = await store.dispatch('getAllAlbums');
})

</script>

<style lang="scss">
.albums-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>