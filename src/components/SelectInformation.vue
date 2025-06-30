<script lang="ts">
import { getCategories } from "@/http/index";

export default {
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    this.categories = await getCategories();
  },
};
</script>

<template>
  <section class="select-information">
    <h1 class="header title-information">Informações</h1>

    <p class="paragraph-lg instructions">
      Selecione abaixo as informações para encontrar o seu livro
    </p>

    <ul class="categories">
      <li v-for="categorie in categories" :key="categorie.name">
        {{ categorie.name }}
        <img :src="categorie.img" :alt="categorie.name" />
        {{ categorie.information[0] }}{{ categorie.information[3] }}
      </li>
    </ul>

    <p class="paragraph tip">
      "Atenção: consideramos que você já conheça alguns dos livros"
    </p>
  </section>
</template>

<style scoped>
.select-information {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-information {
  color: var(--text-primary, #6d214f);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>
