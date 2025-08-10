<script lang="ts">
import { getCategories } from "@/http/index";
import type ICategories from "@/interfaces/ICategories";
import CardCategorie from "./CardCategorie.vue";
import MainButton from "../components/MainButton.vue";

export default {
  data() {
    return {
      categories: [] as ICategories[],
    };
  },
  async created() {
    this.categories = await getCategories();
  },
  components: {
    CardCategorie,
    MainButton,
  },
  emits: ["addCategorie", "removeCategorie", "searchBooks"],
};
</script>

<template>
  <section class="select-information">
    <h1 class="header title-information">Informações</h1>

    <p class="paragraph-lg instructions">
      Selecione abaixo as informações para encontrar o seu livro
    </p>

    <ul class="categories">
      <li v-for="categorie in categories" :key="categorie.id">
        <CardCategorie
          :categorie="categorie"
          @add-categorie="$emit('addCategorie', $event)"
          @remove-categorie="$emit('removeCategorie', $event)"
        />
      </li>
    </ul>

    <p class="paragraph tip">
      "Atenção: consideramos que você já conheça alguns dos livros"
    </p>

    <MainButton text="Buscar Livros" @click="$emit('searchBooks')" />
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
