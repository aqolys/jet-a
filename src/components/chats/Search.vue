<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Найти..."
      @input="onInput"
      ref="search"
    />
    <div class="search__result">
      <div
        class="search-user"
        :class="{
          'search-user--active': activeChat && activeChat.id === result.id,
        }"
        v-for="result in results"
        :key="result.id"
        @click="onSelectChat(result)"
      >
        <img :src="result.avatar" class="search-user__avatar" />
        <div class="search-user__name">{{ result.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    results: [
      {
        id: "aaaaaa9283dj",
        name: "Rhys Hawkins",
        avatar:
          "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
      },
    ],
  }),
  computed: {
    ...mapState({
      activeChat: "activeChat",
    }),
  },
  methods: {
    onSelectChat(value) {
      this.$store.commit("SELECT_CHAT", value);
    },
    onInput(e) {
      let searchValue = this.$refs.search.value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";

.search {
  margin: 10px 0 15px 0;

  &__input {
    border: unset;
    @include border;
    background: transparent;
    cursor: text;
    padding: 8px 45px 8px 15px;
    margin: 5px 10px 10px 10px;
    border-radius: 30px;
    width: calc(100% - 20px);
    color: white;
  }

  &-user {
    width: 100%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    column-gap: 1rem;
    padding: 0 7px 0 7px;
    height: 60px;

    &__avatar {
      width: 100%;
      border-radius: 100%;
    }

    &--active {
      background: $blue !important;
    }

    &:hover {
      background: rgba(64, 145, 227, 0.4);
    }
  }
}
</style>