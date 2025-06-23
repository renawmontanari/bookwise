<template>
  <header class="banner">
    <div class="presentation">
      <img
        src="../../src/assets/images/logo.png"
        alt="Logo do BookWise"
        class="logo"
      />

      <p class="header-lg phrase-header">
        <span class="text-wine">Uma biblioteca infinita de descobertas</span>
        para alimentar sua imaginação!
      </p>

      <p class="caption-lg">
        Encontre seu próximo livro perfeito com base no seu humor, tempo
        disponível e preferências literárias.
      </p>
    </div>

    <img
      src="../../src/assets/images/foto-banner.png"
      alt="Foto de um livro"
      class="photo-banner"
    />
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.phrase-header {
  margin-bottom: 2rem;
}

.text-wine {
  color: var(--text-tertiary, #a35c80);
}

.photo-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .photo-banner {
    width: min(100%, 21.25rem);
  }
}
</style>
