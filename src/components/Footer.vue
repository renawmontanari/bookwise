<script lang="ts">
export default {
  name: "Footer",
};
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <p>Feito por Renan Dev</p>
        <img class="imgDev" src="/public/renandev.png" alt="Renan Dev" />
      </div>
      <div>
        <p>&copy; 2025 Bookwise. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;
}

.footer-left {
  display: flex;
  padding: 4px;
  color: #ccc;
  gap: 8px;
  background-color: rgb(51, 51, 51);
  border-radius: 10px;
  align-items: center;
  border: solid 1px #ccc;
}

.imgDev {
  border-radius: 50%;
}
</style>
