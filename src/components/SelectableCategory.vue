<script lang="ts">
import Tag from "../components/Tag.vue";

export default {
  components: {
    Tag,
  },
  props: {
    categorie: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
};
</script>

<template>
  <button
    class="categorie"
    @click="selected = !selected"
    :aria-pressed="selected"
  >
    <Tag :text="categorie" :active="selected" />
  </button>
</template>

<style scoped>
.categorie {
  cursor: pointer;
}
</style>
