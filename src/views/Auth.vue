<template>
  <div class="auth">
    <div class="auth__container">
      <span class="auth__title">
        {{ mode.title }}
      </span>
      <div class="auth__form">
        <Input
          type="text"
          name="user-name"
          placeholder="Введите свое имя"
          regex=""
          label="Имя:"
          autofocus
          maxlength="15"
          v-model="userName"
        />
        <Input
          type="password"
          name="user-password"
          placeholder="Введите пароль"
          label="Пароль:"
          regex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          maxlength="30"
          v-model="userPassword"
        />
        <Input
          type="password"
          name="user-password-repeat"
          placeholder="Подтвердите пароль"
          maxlength="30"
          v-if="reg"
          v-model="userRPassword"
        />
        <div class="auth__switch">
          {{ mode.switchText }}
          <span @click="this.reg = !this.reg">{{
            mode.switchTextTrigger
          }}</span>
        </div>
        <Button
          :text="mode.buttonText"
          class="button--stretched"
          @click="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Input,
    Button,
  },
  data: () => ({
    reg: false,

    userName: "",
    userPassword: "",
    userRPassword: "",

    modes: [
      {
        title: "Регистрация",
        switchText: "Уже есть аккаунт Jet-a?",
        switchTextTrigger: "Войдите!",
        buttonText: "Зарегистрироваться",
      },
      {
        title: "Вход",
        switchText: "Нет аккаунта Jet-a?",
        switchTextTrigger: "Создайте его!",
        buttonText: "Войти",
      },
    ],
  }),
  computed: {
    mode() {
      return this.modes[+!this.reg];
    },
  },
  methods: {
    handleSubmit() {
      this.reg ? this.register() : this.login();
    },
    login() {
      const { userName, userPassword } = this;

      this.$root.$emit("input-error", {
        name: "user-name",
        message: "нейм занят",
      });

      console.log({ userName, userPassword });
    },
    register() {
      const { userName, userPassword, userRPassword } = this;
      console.log({ userName, userPassword, userRPassword });
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

  &__switch {
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
