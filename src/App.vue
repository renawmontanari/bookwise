<script lang="ts">
import Banner from "./components/Banner.vue";
import MainContent from "./components/MainContent.vue";
import SelectInformation from "./components/SelectInformation.vue";

export default {
  components: {
    Banner: Banner,
    MainContent: MainContent,
  },
};
</script>

<template>
  <Banner />
  <MainContent />
</template>

<style scoped></style>
