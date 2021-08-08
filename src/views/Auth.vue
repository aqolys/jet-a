<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__loader" v-show="loading">
        <Loader />
      </div>
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
          maxlength="30"
          v-model="userPassword"
        />
        <Input
          type="password"
          name="user-password-repeat"
          placeholder="Подтвердите пароль"
          label=" "
          maxlength="30"
          v-if="reg"
          v-model="userRPassword"
        />
        <div class="auth__switch">
          {{ mode.switchText }}
          <span @click="reg = !reg">{{ mode.switchTextTrigger }}</span>
        </div>
        <Button :text="mode.buttonText" class="button--stretched" @click="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Input,
    Button,
    Loader,
  },
  data: () => ({
    reg: false,
    loading: false,

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

    errors: {
      emptyField: "Заполните поле",
      usernameTaken: "Имя пользователя занято",
      passwordIncorrect: "Неверный пароль",
      passwordRIncorrect: "Пароли не совпадают",
      usernameRegexError: "Имя должно состоять только из латинский букв",
      passwordRegexError: "Пароль должен состоять из заглавной, прописной буквы и цифры, и иметь длину 6 символов",
    },

    regex: {
      name: /^[a-zA-Z]+$/,
      password: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    },
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
      const { userName, userPassword, errors, validate } = this;

      if (validate()) {
        return false;
      }

      this.loading = true;
    },
    register() {
      const { userName, userPassword, errors, validate } = this;

      if (validate()) {
        return false;
      }

      this.loading = true;
    },
    regexValidate() {
      const { userName, userPassword, errors, regex, inputError } = this;

      let hasError = false;

      if (!regex.name.test(userName)) {
        inputError("user-name", errors.usernameRegexError);

        hasError = true;
      }

      if (!regex.password.test(userPassword)) {
        inputError("user-password", errors.passwordRegexError);

        hasError = true;
      }

      return hasError;
    },
    validate() {
      const { userName, userPassword, userRPassword, errors, inputError, regexValidate } = this;

      let hasError = false;

      if (this.reg) {
        if (userName && userPassword && userRPassword) {
          if (userPassword !== userRPassword) {
            inputError("user-password-repeat", errors.passwordRIncorrect);

            hasError = true;
          } else {
            if (regexValidate()) {
              hasError = true;
            } else {
              hasError = false;
            }
          }
        } else {
          !userName && inputError("user-name", errors.emptyField);
          !userPassword && inputError("user-password", errors.emptyField);
          !userRPassword && inputError("user-password-repeat", errors.emptyField);

          hasError = true;
        }
      } else {
        if (userName && userPassword) {
          hasError = false;
        } else {
          !userName && inputError("user-name", errors.emptyField);
          !userPassword && inputError("user-password", errors.emptyField);

          hasError = true;
        }
      }

      return hasError;
    },
    inputError(name, message) {
      this.$root.$emit("input-error", {
        name: name,
        message: message,
      });
    },
  },
  mounted() {
    this.$root.$on("on-enter", this.handleSubmit);
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
    box-shadow: 0 0 0 6px $blue-muted;
    position: relative;
  }

  &__loader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
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
