<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  overflow-y: hidden;
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
