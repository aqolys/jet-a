<template>
    <ul class="modal">
      <li class="modal__item"><span>Изображение</span></li>
      <li class="modal__item"><span>Видео</span></li>
      <li class="modal__item"><span>Контакты</span></li>
      <li class="modal__item"><span>Файл</span></li>
      <li class="modal__item"><span>Местоположение</span></li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.modal {
  list-style-type: none;
  width: 300px;
  background: rgba(0,0,0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;


  &__item {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: $blue-muted;
    }
    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius:  0 0 10px 10px;
    }
  }
}
</style>