<script lang="ts">
import type ICategories from "@/interfaces/ICategories";
import type { PropType } from "vue";

export default {
  props: {
    categorie: { type: Object as PropType<ICategories>, required: true },
  },
};
</script>

<template>
  <article class="categorie">
    <header class="categorie__header">
      <h2 class="paragrafo-lg categoria__nome">{{ categorie.genre }}</h2>
    </header>
    <ul class="categoria__ingredientes">
      <li v-for="categorie in categorie.themes" :key="categorie">
        {{ categorie }}
      </li>
    </ul>
  </article>
</template>
