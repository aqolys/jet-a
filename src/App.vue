<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    resizeHandler() {
      if (window) {
        let vh = window.innerHeight * 0.01;

        this.$store.commit("SET_IS_MOBILE", window.innerWidth <= 576 ? true : false);

        window.document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    },
  },
  mounted() {
    this.resizeHandler();

    window.addEventListener("resize", this.resizeHandler);
  },
};
</script>

<style lang="scss">
@import "@/scss/mixins";

* {
  @include scrollbar;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  color: white;
  overflow-y: hidden;
  height: calc(var(--vh, 1vh) * 100);
}

body {
  overflow-y: hidden;
}

input,
button,
textarea {
  bottom: unset;
  outline: unset;
}
</style>
