<script lang="ts">
import type { PropType } from "vue";
import Tag from "../components/Tag.vue";

export default {
  components: {
    Tag,
  },
  props: {
    informations: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
};
</script>

<template>
  <section>
    <span class="subtitle-lg your-list-text"> Informações do livro: </span>

    <ul v-if="informations.length" class="your-list-information">
      <li v-for="information in informations" :key="information">
        <Tag :text="information" active />
      </li>
    </ul>

    <p v-else class="paragrafo empty-list">
      <img
        src="../assets/images/icones/lista-vazia.svg"
        alt="Icone de pesquisa"
      />
      As informações estão vazias, selecione as informações para iniciar
    </p>
  </section>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--background-primary, #f8f4e3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.your-list-text {
  color: var(--text-primary, #6d214f);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.your-list-information {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
