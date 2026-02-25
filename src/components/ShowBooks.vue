<script lang="ts">
import type ICategories from "@/interfaces/ICategories";
import MainButton from "../components/MainButton.vue";
import { getCategories } from "@/http";
import CardBook from "./CardBook.vue";
import type { PropType } from "vue";

export default {
  name: "ShowBooks",
  props: {
    selectedThemes: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  data() {
    return {
      foundBooks: [] as ICategories[],
    };
  },
  async created() {
    const allBooks = await getCategories();

    // Filtrar livros baseado nos temas selecionados
    if (this.selectedThemes.length > 0) {
      this.foundBooks = allBooks.filter((book) => {
        // Verifica se o livro tem pelo menos um dos temas selecionados
        return this.selectedThemes.some((theme) =>
          book.themes.includes(theme)
        );
      });
    } else {
      // Se nenhum tema foi selecionado, mostra todos os livros
      this.foundBooks = allBooks;
    }
  },
  components: {
    MainButton,
    CardBook,
  },
  emits: ["editBooks"],
};
</script>

<template>
  <section class="show-books">
    <h1 class="header title-books">Livros</h1>

    <p class="subtitle-lg results-found">
      Resultados encontrados: {{ foundBooks.length }}
    </p>

    <div v-if="foundBooks.length" class="books-wrapper">
      <p class="subtitle-lg information">
        Veja as opções de livros que encontramos com os gêneros que você
        selecionou.
      </p>

      <ul class="books">
        <li v-for="book of foundBooks" :key="book.id">
          <CardBook :categorie="book" />
        </li>
      </ul>
    </div>

    <div v-else class="books-not-found">
      <p class="subtitle-lg books-not-found__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de
        novo?
      </p>

      <img
        src="../assets/images/foto-banner.png"
        alt="Desenho de um livro aberto."
      />
    </div>

    <MainButton text="Editar lista" @click="$emit('editBooks')" />
  </section>
</template>

<style scoped>
.show-books {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title-books {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 1.5rem;
}

.results-found {
  color: var(--verde-medio, #3d6d4a);
  margin-bottom: 0.5rem;
}

.books-wrapper {
  margin-bottom: 3.5rem;
}

.information {
  margin-bottom: 2rem;
}

.books {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.books-not-found {
  margin-bottom: 2rem;
}

.books-not-found__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
