<template>
  <div class="header">
    <div class="header-back">
      <Button icon="sign-out-alt" @click="closeDialogue" />
    </div>
    <div class="header-user">
      <div class="header-user__avatar">
        <img :src="user.avatar" alt="" />
        <span class="header-user__status" v-show="user.online"></span>
      </div>
      <div class="header-user__name">{{ user.name }}</div>
    </div>
    <div class="header-actions"></div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  props: ["user"],
  components: {
    Button,
  },
  methods: {
    closeDialogue() {
      this.$store.commit("SELECT_CHAT", null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
@import "@/scss/media-query.scss";

.header {
  padding: 0 7px 0 7px;
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 10px;

  &-user {
    display: grid;
    grid-template-columns: 2.7rem 1fr 1fr;
    column-gap: 1rem;

    &__avatar {
      display: flex;
      align-items: center;
      position: relative;

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

    &__status {
      background: #fff;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      border: 2px solid $blue;
      align-self: center;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  &-back {
    transform: rotate(180deg);
  }

  @include mobile-lg {
  }
}
</style>