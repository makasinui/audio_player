<template>
  <v-card class="current-track-card" flat>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="w-100">
        <v-card-title class="text-h5 card-main">
          <div>
            <v-avatar class="card-image" rounded="0">
              <v-img
                :src="image"
              ></v-img>
            </v-avatar>
          </div>
          <div class="card-name">
            <div class="card-title">{{trackName}}</div>
            <div class="card-subtitle">{{artist}}</div>
          </div>
        </v-card-title>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  artist: String,
  img: String,
  trackName: String,
});

const getImage = () => {
  return new URL(`../../../assets/img/${props.img}`, import.meta.url).href;
}

const image = ref(getImage());

watch([props], () => {
  image.value = getImage();
})
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins.scss";
@import "../../../styles/variables.scss";
.current-track-card {
  background: unset;
}
.card-main {
  display: flex;
  gap: 15px;

  .card-name {
    display: flex;
    width: 100%;
    margin-left: 15px;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 475px) {
      margin-left: 0;
      justify-content: center;
      max-width: 130px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .card-title {
      @include card-title;

      @media screen and (max-width: 475px) {
        font-size: 14px;
      }
    }
    .card-subtitle {
      @include card-subtitle;
      font-size: 14px;
      color: white;

      @media screen and (max-width: 475px) {
        font-size: 12px;
      }
    }

  }
  .card-image {
    @include set-icon-width(50px, 40px, 475px)
  }
}
</style>
