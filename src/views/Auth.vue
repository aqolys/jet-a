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
          maxlength="15"
          v-model="userName"
        />
        <Input
          type="password"
          placeholder="Введите пароль"
          label="Пароль:"
          maxlength="30"
          v-model="userPassword"
        />
        <Input
          type="password"
          placeholder="Подтвердите пароль"
          label=" "
          maxlength="30"
          v-if="mode === 'reg'"
          v-model="userPasswordRepeat"
        />
        <div class="auth__switch">
          {{ switchText }}
          <span @click="switchMode">{{ switchTextTrigger }}</span>
        </div>
        <Button
          :text="buttonText"
          class="button--stretched"
          @click="mode === 'auth' ? login() : register()"
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
  data() {
    return {
      mode: "auth",
      title: "Вход",
      switchText: "Нет аккаунта Jet-a?",
      switchTextTrigger: "Создайте его!",
      buttonText: "Войти",
      userName: "",
      userPassword: "",
      userPasswordRepeat: "",
    };
  },
  methods: {
    switchMode() {
      switch (this.mode) {
        case "auth":
          this.title = "Регистрация";
          this.switchText = "Уже есть аккаунт Jet-a?";
          this.switchTextTrigger = "Войдите!";
          this.buttonText = "Зарегистрироваться";
          this.mode = "reg";
          break;

        case "reg":
          this.title = "Вход";
          this.switchText = "Нету аккаунта Jet-a?";
          this.switchTextTrigger = "Создайте его!";
          this.buttonText = "Войти";
          this.mode = "auth";
          break;
      }
    },
    login() {
      const nameInput = document.getElementById("name");
      const passwordInput = document.getElementById("password");
      const name = nameInput.value;
      const password = passwordInput.value;

      console.log(this.input);

      // if (name && password) {
      //   console.log("success");
      // } else {
      //   this.$root.$emit("inputError");
      // }
    },
    register() {
      let { name, password, passwordConfirm } = this.$refs;
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
