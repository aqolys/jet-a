<template>
  <div class="auth">
    <div class="auth__container">
      <span class="auth__title">
        {{ title }}
      </span>
      <div class="auth__form">
        <Input
          type="text"
          placeholder="Введите свое имя"
          label="Имя:"
          id="name"
          maxlength="15"
        />
        <Input
          type="password"
          placeholder="Введите пароль"
          label="Пароль:"
          id="password"
          maxlength="30"
        />
        <div class="auth__toggle">
          Нету аккаунта Jet-a? <span @click="switchMode">Создайте его!</span>
        </div>
        <Button text="Войти" class="button--stretched" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  data: () => ({
    mode: "auth",
    title: "Вход",
  }),
  components: {
    Input,
    Button,
  },
  methods: {
    switchMode() {
      let { mode } = this;

      switch (mode) {
        case "auth":
          this.title = "Регистрация";
          this.mode = "reg";
          break;

        case "reg":
          this.title = "Вход";
          this.mode = "auth";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.auth {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.1);
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 40px 20px 40px;
    border-radius: 10px;
  }

  &__title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  &__form {
    width: 100%;
  }

  &__toggle {
    font-size: 16px;
    margin-bottom: 15px;
    user-select: none;

    span {
      user-select: none;
      cursor: pointer;
      font-size: 16px;
      color: $blue;
      text-decoration: underline;
    }
  }
}
</style>