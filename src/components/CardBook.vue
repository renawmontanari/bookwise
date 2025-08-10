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
  <article class="books">
    <header class="books__header">
      <img
        class="book__img"
        :src="`/imagens/livros/${categorie.image}`"
        :alt="`Foto de ${categorie.title}`"
      />
    </header>

    <section class="books__body">
      <h2 class="subtitle books__name">
        {{ categorie.title }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
.books {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background: var(--Branco, #fff);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.books__header {
  padding: 2rem 1rem;
}

.book__img {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.books__name {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
