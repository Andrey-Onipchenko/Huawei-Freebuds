<template>
  <button @click="openPopup()" class="popup-open btn-result">
    Прийняти участь у розіграші
  </button>
  <div ref="popup" class="popup" :class="isOpen && 'popup-active'">
    <div class="popup__wrap">
      <button @click="closePopup()" class="popup__close"></button>
      <h4 class="popup__title">Реєстрація</h4>
      <div class="popup__enter">
        <p class="popup__enter-title">Ваше ім’я</p>
        <input
          class="popup__enter-input"
          :class="registrationSuccessfully && 'popup__disabled'"
          v-model="userName"
          type="text"
          name="name"
          :disabled="registrationSuccessfully"
        />
        <p class="popup__enter-subtitle" ref="inputName">Це поле обов’язкове</p>
      </div>
      <div class="popup__enter">
        <p class="popup__enter-title">Ваш номер:</p>
        <input
          class="popup__enter-input"
          :class="registrationSuccessfully && 'popup__disabled'"
          v-model="userPhone"
          type="phone"
          name="phone"
          v-maska="'+38 (0##) ###-##-##'"
          :disabled="registrationSuccessfully"
        />
        <p class="popup__enter-subtitle" ref="inputPhone">
          Це поле обов’язкове
        </p>
      </div>
      <button
        class="popup__submit"
        :class="registrationSuccessfully && 'popup__disabled'"
        @click="sub()"
        ref="submitBtn"
        :disabled="registrationSuccessfully"
      >
        {{ userCreated }}
        <img
          class="popup__submit-img"
          ref="submitImg"
          src="../assets/images/submit.svg"
          alt="submit"
        />
      </button>
      <p class="popup__error">{{ error }}</p>
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
      userCreated: "Надіслати заявку",
      error: null,
      registrationSuccessfully: false,
    };
  },
  methods: {
    openPopup() {
      this.isOpen = true;
      // this.userCreated = null;
    },
    closePopup() {
      this.isOpen = false;
    },
    sub() {
      if (this.userPhone.length === 19 && this.userName.length > 0) {
        axios
          .post("https://back-sp.umh.com.ua/api/huawei/freebuds/new", {
            name: this.userName,
            phone: this.userPhone,
          })
          .then((response) => {
            if (response.status === 201) {
              this.userCreated = response.data.msg;
              this.$refs.submitBtn.style.color = "#fff";
              this.$refs.submitBtn.style.background = "#3e8e4a";
              this.$refs.submitImg.style.opacity = "1";
              this.registrationSuccessfully = true;
              this.error = null;
              // this.registration = false;
              // this.reg = true;
              // this.gtagRegistration();
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
        this.userName.length === 0
          ? (this.$refs.inputName.style.color = "red")
          : (this.$refs.inputName.style.color = "#d3d3d3");
        this.userPhone.length < 19
          ? (this.$refs.inputPhone.style.color = "red")
          : (this.$refs.inputPhone.style.color = "#d3d3d3");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-open {
  color: #fff;
  background: #3e8e4a;
}
.popup {
  max-width: 320px;
  width: 100%;
  background: #fff;
  position: fixed;
  padding: 55px 20px 20px;
  top: 50%;
  transform: translateY(-50%);
  right: -100%;
  color: #000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 500ms ease-in-out;
  @media (max-width: 1600px) {
    top: -120%;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
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
    background: linear-gradient(180deg, #f4f5f9 0%, #e8e9ec 100%);
    border: 1px solid #d3d3d3;

    border-radius: 10px;
    font-size: 18px;
    line-height: 21px;
    // color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    transition: all 500ms ease;
    &-img {
      display: inline-block;
      margin-left: 10px;
      opacity: 0;
      transition: all 500ms ease;
    }
  }
  &__error {
    font-size: 14px;
    height: 18px;
    color: red;
  }
  &__disabled {
    cursor: not-allowed;
  }
}
.popup-active {
  right: 5%;
  @media (max-width: 1600px) {
    top: 40%;
    right: 0;
  }
  @media (max-width: 350px) {
    top: 52%;
  }
}
</style>
