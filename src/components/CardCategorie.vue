<script lang="ts">
export default {
  props: {
    categorie: {
      type: Object,
    },
  },
};
</script>

<template>
  {{ categorie.name }}
</template>
