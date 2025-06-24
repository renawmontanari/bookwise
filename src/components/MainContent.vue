<script lang="ts">
export default {
  data() {
    return {
      informations: ["Romance", "Classico", "2024", "Autor"],
    };
  },
};
</script>

<template>
  <main class="main-content">
    <section>
      <span class="subtitle-lg your-list-text"> Sua lista: </span>

      <ul class="your-list-information">
        <li v-for="information in informations" class="information">
          {{ information }}
        </li>
      </ul>
    </section>
  </main>
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

.information {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--background-primary, #f8f4e3);
  background: var(--text-secundary, #8b3a62);
  font-weight: 700;
}

.lista-vazia {
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
