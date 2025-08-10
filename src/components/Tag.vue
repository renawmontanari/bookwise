<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <span :class="['tag', { active }]">
    {{ text }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--background-primary, #f8f4e3);
  background: var(--background-secundary, #c593ac);
  font-weight: 400;
}

.tag.active {
  color: var(--background-primary, #f8f4e3);
  background-color: var(--text-primary, #6d214f);
  font-weight: 700;
}
</style>
