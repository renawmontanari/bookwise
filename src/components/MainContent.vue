<script lang="ts">
import SelectInformation from "./SelectInformation.vue";
import Tag from "../components/Tag.vue";
import YouList from "../components/YouList.vue";
import ShowBooks from "../components/ShowBooks.vue";

type Page = "SelectGenres" | "ShowBooks";

export default {
  components: {
    SelectInformation: SelectInformation,
    Tag: Tag,
    YouList: YouList,
    ShowBooks: ShowBooks,
  },
  data() {
    return {
      informations: [] as string[],
      content: "SelectGenres" as Page,
    };
  },
  methods: {
    addInformation(information: string) {
      this.informations.push(information);
    },
    removeCategorie(information: string) {
      this.informations = this.informations.filter(
        (youList) => information !== youList
      );
    },
    navigate(page: Page) {
      this.content = page;
    },
  },
};
</script>

<template>
  <main class="main-content">
    <YouList :informations="informations" />

    <SelectInformation
      v-if="content === 'SelectGenres'"
      @add-categorie="addInformation"
      @remove-categorie="removeCategorie"
      @search-books="navigate('ShowBooks')"
    />

    <ShowBooks
      v-else-if="content === 'ShowBooks'"
      :selected-themes="informations"
      @edit-books="navigate('SelectGenres')"
    />
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
