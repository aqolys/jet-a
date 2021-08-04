<template>
  <div class="auth">
    <div class="auth__container">
      <span class="auth__title">
        {{ mode === "auth" ? "Вход" : "Регистрация" }}
      </span>
      <div class="auth__form">
        <Input type="text" placeholder="Введите свое имя" label="Имя: " />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  data: () => ({
    mode: "auth",
  }),
  components: {
    Input,
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>