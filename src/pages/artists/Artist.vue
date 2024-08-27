<template>
    <Layout :page="`Исполнитель ${artist?.name}`">
        <v-row v-if="!loading" class="artist-detail content">
            <v-col class="artist-detail__header" cols="12">
                <v-col cols="2" class="image">
                    <v-img height="200" :src="image" />
                </v-col>
                <v-col
                    >Исполнитель<main-title>{{
                        artist?.name
                    }}</main-title></v-col
                >
            </v-col>
            <v-col cols="12">
                <v-tabs v-model="currentTab">
                    <v-tab value="tracks"> Треки </v-tab>
                    <v-tab value="albums"> Альбомы </v-tab>
                </v-tabs>
                <v-divider />
            </v-col>
            <v-col cols="12">
                <v-tabs-window v-model="currentTab">
                    <v-tabs-window-item class="track-container" value="tracks">
                        <track-item
                            v-for="track in artist.tracks"
                            :key="track.id"
                            :album="getAlbum(track.albumId)"
                            :artist="artist"
                            :img="track?.img"
                            :track-name="track.name"
                            :track-url="track.url"
                            :favorite="!!track.user_tracks.length"
                        />
                    </v-tabs-window-item>
                    <v-tabs-window-item class="album-container" value="albums">
                        <album-item
                            v-for="album in artist.albums"
                            :album="album"
                            :key="album.id"
                        />
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-col>
        </v-row>
        <v-icon v-else icon="sync" size="150px" class="loading-icon"></v-icon>
    </Layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getImageSrc } from "@/helpers/index.js";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import TrackItem from "@/components/audio/TrackItem.vue";
import AlbumItem from "@/components/audio/AlbumItem.vue";

const store = useStore();
const router = useRoute();

const artist = ref();
const image = ref();
const currentTab = ref();
const loading = ref(true);

const getAlbum = (id) => {
    return artist.value.albums.find((item) => item.id === id);
};

const props = defineProps({
    id: Number,
});

onMounted(async () => {
    artist.value = await store.dispatch("getArtist", router.params.id);
    image.value = getImageSrc(artist.value.img);
    loading.value = false;
});
</script>

<style lang="scss">
.artist-detail {
    color: white;

    &__header {
        display: flex;
        gap: 20px;
        align-i .image {
            width: 100%;
        }
    }

    .track-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .album-container {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
}

.loading-icon {
    position: fixed;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
