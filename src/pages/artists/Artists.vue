<template>
    <Layout page="Исполнители">
        <v-row class="content">
            <v-col cols="12">
                <main-title>Исполнители</main-title>
                <div class="artists-container">
                    <artist-item
                        v-for="artist in artistData"
                        :artist="artist"
                        :key="artist.id"
                    />
                </div>
            </v-col>
        </v-row>
    </Layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import ArtistItem from "../../components/audio/ArtistItem.vue";

const store = useStore();
const artistData = ref();

onMounted(async () => {
    artistData.value = await store.dispatch("getAllArtists");
});
</script>

<style lang="scss">
.artists-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}
</style>
