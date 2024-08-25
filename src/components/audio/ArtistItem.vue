<template>
    <v-hover>
        <template #default="{ isHovering, props }">
            <v-card
                @click="handleClick(artist.id)"
                v-bind="props"
                :color="isHovering ? '#ff506d' : '#070827'"
                flat
                class="artist-item"
                width="240"
            >
                <v-img
                    class="align-center artist-img text-white"
                    height="200"
                    :src="image"
                    cover
                >
                </v-img>
                <v-card-title class="artist-title">{{
                    artist.name
                }}</v-card-title>
            </v-card>
        </template>
    </v-hover>
</template>

<script setup>
import { getImageSrc } from "@/helpers/index.js";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    artist: Object,
});

const handleClick = (id) => {
    router.push(`/artist/${id}`)
};

const image = getImageSrc(props.artist.img);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.artist-item {
    cursor: pointer;
    padding: 20px 10px;
    border-radius: $border-radius;
    flex: 0 0 240px;

    .artist-img {
        border-radius: $border-radius;
    }

    .artist-actions {
        display: flex;
        visibility: hidden;
        justify-content: center;

        .v-icon.play {
            border-radius: 50%;
            padding: 30px;
            backdrop-filter: blur(12px) brightness(0.3);
        }
    }
    .artist-title {
        @include card-title;
        & {
            padding-left: 0;
        }
    }

    .artist-subtitle {
        @include card-subtitle;
        & {
            padding-left: 0;
        }
    }

    &:hover,
    &:active {
        .artist-actions {
            visibility: visible;
        }
    }
}
</style>
