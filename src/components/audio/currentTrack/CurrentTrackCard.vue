<template>
  <v-card color="#ff506d" flat>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div class="w-100">
        <v-card-title class="text-h5 card-main">
          <div>
            <v-avatar size="60" rounded="0">
              <v-img
                :src="img"
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
const props = defineProps({
  artist: String,
  img: String,
  trackName: String,
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins.scss";
@import "../../../styles/variables.scss";

.card-main {
  display: flex;
  gap: 15px;

  .card-name {
    display: flex;
    width: 100%;
    margin-left: 15px;
    flex-direction: column;
    justify-content: space-between;

    .card-title {
      @include card-title;
      font-size: 22px;
    }
    .card-subtitle {
      @include card-subtitle;
      font-size: 16px;
      color: white;
    }
  }
}
</style>
