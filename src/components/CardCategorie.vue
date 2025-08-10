<script lang="ts">
import type ICategories from "@/interfaces/ICategories";
import type { PropType } from "vue";
import Tag from "../components/Tag.vue";
import SelectableCategory from "../components/SelectableCategory.vue";

export default {
  props: {
    categorie: { type: Object as PropType<ICategories>, required: true },
  },
  components: {
    Tag,
    SelectableCategory,
  },
  emits: ["addCategorie", "removeCategorie"],
};
</script>

<template>
  <article class="categorie">
    <header class="categorie__header">
      <h2 class="subtitle-lg categorie__genre">{{ categorie.genre }}</h2>
    </header>
    <ul class="categorie__information">
      <li v-for="categorie in categorie.themes" :key="categorie">
        <SelectableCategory
          :categorie="categorie"
          @add-categorie="$emit('addCategorie', $event)"
          @remove-categorie="$emit('removeCategorie', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<style scoped>
.categorie {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categorie__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* .categoria__imagem {
  width: 3.5rem;
} */

.categorie__genre {
  text-align: center;
  color: var(--text-primary, #6d214f);
  font-weight: 700;
}

.categorie__information {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
