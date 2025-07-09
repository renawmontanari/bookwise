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
      <img src="" alt="" class="categorie__img" />
      <h2 class="paragrafo-lg categoria__nome">{{ categorie.title }}</h2>
    </header>
  </article>
</template>
