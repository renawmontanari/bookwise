<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="subtitle-lg main-button">
    {{ text }}
  </button>
</template>

<style scoped>
.main-button {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--creme, #fffaf3);
  background: var(--text-secundary, #8b3a62);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-button:hover {
  background: var(--text-primary, #6d214f);
}
</style>
