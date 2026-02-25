<script lang="ts">
import type ICategories from "@/interfaces/ICategories";
import type { PropType } from "vue";

export default {
  props: {
    categorie: { type: Object as PropType<ICategories>, required: true },
  },
  data() {
    return {
      imageError: false,
      defaultImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Crect fill='%23f5f5f5' width='200' height='300'/%3E%3Cpath d='M50 80 L150 80 L150 220 L50 220 Z' fill='%23e0e0e0' stroke='%23ccc' stroke-width='2'/%3E%3Cpath d='M50 80 L50 220' stroke='%23aaa' stroke-width='2'/%3E%3Cpath d='M60 100 L140 100 M60 120 L140 120 M60 140 L120 140' stroke='%23999' stroke-width='1.5'/%3E%3Ctext fill='%23999' font-family='Arial, sans-serif' font-size='14' x='100' y='180' text-anchor='middle'%3ESem imagem%3C/text%3E%3C/svg%3E",
    };
  },
  methods: {
    handleImageError(event: Event) {
      const img = event.target as HTMLImageElement;
      if (!this.imageError) {
        this.imageError = true;
        img.src = this.defaultImage;
      }
    },
  },
  computed: {
    imageSrc(): string {
      if (this.imageError) {
        return this.defaultImage;
      }
      // Verifica se a URL é válida
      if (this.categorie.image && this.categorie.image.startsWith("http")) {
        return this.categorie.image;
      }
      return this.defaultImage;
    },
  },
};
</script>

<template>
  <article class="books">
    <header class="books__header">
      <img
        class="book__img"
        :src="imageSrc"
        :alt="`Foto de ${categorie.title}`"
        @error="handleImageError"
        loading="lazy"
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
  height: auto;
  min-height: 200px;
  object-fit: cover;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
  background-color: var(--background-primary, #f8f4e3);
}

.books__name {
  font-weight: 700;
  color: var(--cinza, #444);
}
</style>
