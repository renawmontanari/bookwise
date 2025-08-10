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
  methods: {
    clickCategorie() {
      this.selected = !this.selected;

      if (this.selected) {
        this.$emit("addCategorie", this.categorie);
      }
    },
  },
  emits: ["addCategorie"],
};
</script>

<template>
  <button class="categorie" @click="clickCategorie" :aria-pressed="selected">
    <Tag :text="categorie" :active="selected" />
  </button>
</template>

<style scoped>
.categorie {
  cursor: pointer;
}
</style>
