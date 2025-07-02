<script lang="ts">
import type ICategories from "@/interfaces/ICategories";
import type { PropType } from "vue";

export default {
  props: {
    categorie: { type: Object as PropType<ICategories>, required: true },
  },
};
</script>

<template>
  {{ categorie.name }}
  {{ categorie.img }}
</template>
