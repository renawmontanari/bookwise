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
      <img
        :src="`/imagens/icones/categorias_ingredientes/${categorie.img}`"
        alt=""
        class="categorie__img"
      />
      <p>{{ categorie.img }}</p>
    </header>
  </article>
</template>
