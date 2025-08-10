<script lang="ts">
import SelectInformation from "./SelectInformation.vue";
import Tag from "../components/Tag.vue";
import YouList from "../components/YouList.vue";

export default {
  components: {
    SelectInformation: SelectInformation,
    Tag: Tag,
  },
  data() {
    return {
      informations: ["Nome", "Gênero", "2024", "Autor"],
    };
  },
};
</script>

<template>
  <main class="main-content">
    <YouList :informations="informations" />

    <SelectInformation />
  </main>
</template>

<style scoped></style>
