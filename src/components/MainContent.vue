<script lang="ts">
import SelectInformation from "./SelectInformation.vue";
import Tag from "../components/Tag.vue";
import YouList from "../components/YouList.vue";

export default {
  components: {
    SelectInformation: SelectInformation,
    Tag: Tag,
    YouList: YouList,
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

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--background-primary, #f8f4e3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
</style>
