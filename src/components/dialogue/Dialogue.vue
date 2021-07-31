<template>
  <div class="dialogue"></div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.$store.commit("SELECT_CHAT", null);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.dialogue {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
}
</style>