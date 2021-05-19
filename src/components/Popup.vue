<template>
  <button @click="openPopup()" class="popup-open btn-result">
    ЗАРЕЄСТРУВАТИСЬ
  </button>
  <div ref="popup" class="popup" :class="isOpen && 'popup-active'">
    <div class="popup__wrap">
      <button @click="closePopup()" class="popup__close"></button>
      <h4 class="popup__title">Реєстрація</h4>
      <div class="popup__enter">
        <p class="popup__enter-title">Ваше ім’я</p>
        <input
          class="popup__enter-input"
          v-model="userName"
          type="text"
          name="name"
        />
        <p class="popup__enter-subtitle">Це поле обов’язкове</p>
      </div>
      <div class="popup__enter">
        <p class="popup__enter-title">Ваш номер:</p>
        <input
          class="popup__enter-input"
          v-model="userPhone"
          type="phone"
          name="phone"
          v-maska="'+38 (0##) ###-##-##'"
        />
        <p class="popup__enter-subtitle">Це поле обов’язкове</p>
      </div>
      <button class="popup__submit">
        Надіслати зайвку
        <img
          class="popup__submit-img"
          src="../assets/images/submit.svg"
          alt="submit"
        />
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isOpen: false,
      userName: "",
      userPhone: "",
    };
  },
  methods: {
    openPopup() {
      this.isOpen = true;
    },
    closePopup() {
      this.isOpen = false;
    },
    sub() {
      if (this.userPhone.length === 15 && this.userName.length > 0) {
        axios
          .post("https://back-sp.umh.com.ua/api/hutorok/easter/new", {
            name: this.userName,
            phone: this.userPhone,
          })
          .then((response) => {
            if (response.status === 201) {
              this.userCreated = response.data.msg;
              this.registration = false;
              this.reg = true;
              this.gtagRegistration();
            } else if (response.status === 200) {
              this.error = "Користувач з таким телефоном вже існує";
            } else if (response.status === 500) {
              this.userCreated = "Упс, щось пішло не так, спробуйте ще раз";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.error = "Заповніть всі поля";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-open {
  color: #fff;
  background: #3e8e4a;
  text-transform: uppercase;
}
.popup {
  max-width: 320px;
  width: 100%;
  background: #fff;
  position: fixed;
  padding: 55px 20px 30px;
  top: 50%;
  transform: translateY(-50%);
  right: -100%;
  color: #000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 500ms ease-in-out;
  &__wrap {
    position: relative;
    text-align: left;
  }
  &__close {
    position: absolute;
    width: 32px;
    height: 32px;
    top: -45px;
    right: -10px;
    background: url("../assets/images/close.svg") center no-repeat;
  }
  &__title {
    font-family: "Huawei Bold", sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 50px;
  }
  &__enter {
    margin-bottom: 25px;
    &-title {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 12px;
    }
    &-input {
      width: 100%;
      height: 48px;
      border: 1px solid #d3d3d3;
      border-radius: 4px;
      margin-bottom: 5px;
      outline: transparent;
      font-size: 18px;
      line-height: 22px;
      padding-left: 10px;
    }
    &-subtitle {
      font-size: 10px;
      line-height: 12px;
      color: #d3d3d3;
    }
  }
  &__submit {
    width: 100%;
    height: 48px;
    background: #3e8e4a;
    border-radius: 10px;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    &-img {
      display: inline-block;
      margin-left: 20px;
    }
  }
}
.popup-active {
  right: 10%;
}
</style>
