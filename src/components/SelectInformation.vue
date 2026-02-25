<script lang="ts">
import { getCategories } from "@/http/index";
import type ICategories from "@/interfaces/ICategories";
import CardCategorie from "./CardCategorie.vue";
import MainButton from "../components/MainButton.vue";

export default {
  data() {
    return {
      categories: [] as ICategories[],
      currentIndex: 0,
      itemsPerView: 3,
    };
  },
  async created() {
    this.categories = await getCategories();
    this.updateItemsPerView();
    window.addEventListener("resize", this.updateItemsPerView);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateItemsPerView);
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.categories.length / this.itemsPerView);
    },
    currentPage(): number {
      return this.currentIndex + 1;
    },
    visibleCategories(): ICategories[] {
      const start = this.currentIndex * this.itemsPerView;
      const end = start + this.itemsPerView;
      return this.categories.slice(start, end);
    },
    canGoPrev(): boolean {
      return this.currentIndex > 0;
    },
    canGoNext(): boolean {
      return this.currentIndex < this.totalPages - 1;
    },
  },
  methods: {
    updateItemsPerView() {
      const width = window.innerWidth;
      if (width < 768) {
        this.itemsPerView = 1;
      } else if (width < 1200) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 3;
      }
      // Ajusta o índice atual se necessário
      const maxIndex = Math.max(0, this.totalPages - 1);
      if (this.currentIndex > maxIndex) {
        this.currentIndex = maxIndex;
      }
    },
    goToPrev() {
      if (this.canGoPrev) {
        this.currentIndex--;
      }
    },
    goToNext() {
      if (this.canGoNext) {
        this.currentIndex++;
      }
    },
    goToPage(page: number) {
      const newIndex = page - 1;
      if (newIndex >= 0 && newIndex < this.totalPages) {
        this.currentIndex = newIndex;
      }
    },
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

    <div class="carousel-wrapper">
      <button
        class="carousel-button carousel-button--prev"
        :disabled="!canGoPrev"
        @click="goToPrev"
        aria-label="Categoria anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="carousel-container">
        <ul class="categories">
          <li v-for="categorie in visibleCategories" :key="categorie.id">
            <CardCategorie
              :categorie="categorie"
              @add-categorie="$emit('addCategorie', $event)"
              @remove-categorie="$emit('removeCategorie', $event)"
            />
          </li>
        </ul>

        <div class="carousel-pagination" v-if="totalPages > 1">
          <button
            v-for="page in totalPages"
            :key="page"
            class="pagination-dot"
            :class="{ 'pagination-dot--active': page === currentPage }"
            @click="goToPage(page)"
            :aria-label="`Ir para página ${page}`"
          ></button>
        </div>
      </div>

      <button
        class="carousel-button carousel-button--next"
        :disabled="!canGoNext"
        @click="goToNext"
        aria-label="Próxima categoria"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

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
  width: 100%;
  max-width: 1200px;
}

.title-information {
  color: var(--text-primary, #6d214f);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.carousel-container {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;
  width: 100%;
}

.categories li {
  flex: 0 0 auto;
  min-width: 0;
}

.carousel-button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background: var(--text-secundary, #8b3a62);
  color: var(--creme, #fffaf3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-button:hover:not(:disabled) {
  background: var(--text-primary, #6d214f);
  transform: scale(1.1);
}

.carousel-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-button:active:not(:disabled) {
  transform: scale(0.95);
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.pagination-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: var(--text-secundary, #8b3a62);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.pagination-dot:hover {
  opacity: 0.6;
  transform: scale(1.2);
}

.pagination-dot--active {
  opacity: 1;
  background: var(--text-primary, #6d214f);
  transform: scale(1.3);
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 1200px) {
  .carousel-wrapper {
    gap: 0.5rem;
  }

  .carousel-button {
    width: 2.5rem;
    height: 2.5rem;
  }

  .categories {
    gap: 1rem;
  }
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }

  .carousel-button {
    width: 2rem;
    height: 2rem;
  }

  .carousel-button svg {
    width: 18px;
    height: 18px;
  }

  .categories {
    gap: 0.75rem;
  }
}
</style>
