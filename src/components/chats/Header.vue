<template>
  <div class="header">
    <div class="header-user">
      <div class="header-user__avatar">
        <img
          src="https://anfisabreus.ru/wp-content/plugins/instagram-widget-by-wpzoom/assets/backend/img/user-avatar.jpg"
          alt=""
        />
      </div>
      <div class="header-user__name">Danil Danilenko</div>
    </div>
    <div class="header-actions">
      <Button
        icon="search"
        @click="searchToggle"
        class="button-header"
        :class="{ active: searchVisibility }"
      />
      <Button icon="cog" class="button-header" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  computed: {
    ...mapState({
      searchVisibility: "searchVisibility",
    }),
  },
  methods: {
    searchToggle() {
      this.$store.commit("SEARCH_TOGGLE", !this.searchVisibility);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0 7px 0 7px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &-user {
    display: grid;
    grid-template-columns: 2.7rem 1fr;
    column-gap: 1rem;

    &__avatar {
      display: flex;
      align-items: center;

      img {
        width: 100%;
        border-radius: 100%;
      }
    }

    &__name {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  }

  &-actions {
    display: flex;
  }
}
</style>
