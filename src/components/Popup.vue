<template>
  <button @click="openPopup()" class="popup-open btn-result">
    Взяти участь у розіграші
  </button>
  <div ref="popup" class="popup" :class="isOpen && 'popup-active'">
    <div class="popup__wrap">
      <button @click="closePopup()" class="popup__close"></button>
      <h4 class="popup__title">Реєстрація</h4>
      <h5 class="popup__subtitle">
        для участі в розіграші 3-х пар навушників Huawei FreeBuds 4i
      </h5>
      <div class="popup__enter">
        <p class="popup__enter-title">Ваше ім’я</p>
        <input
          class="popup__enter-input"
          v-model="userName"
          type="text"
          name="name"
        />
        <p class="popup__enter-subtitle" ref="inputName">Це поле обов’язкове</p>
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
        <p class="popup__enter-subtitle" ref="inputPhone">
          Це поле обов’язкове
        </p>
      </div>
      <button class="popup__submit" @click="sub()" ref="submitBtn">
        {{ userCreated }}
        <img
          class="popup__submit-img"
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
    };
  },
  emits: ["finishRegistration"],
  methods: {
    openPopup() {
      this.isOpen = true;
      this.analiticsRegistration();
    },
    closePopup() {
      this.isOpen = false;
    },
    sub() {
      if (this.userPhone.length === 19 && this.userName.length > 0) {
        axios
          .post("https://back-sp.umh.com.ua/api/huawei/FreeBuds/new", {
            name: this.userName,
            phone: this.userPhone,
          })
          .then((response) => {
            if (response.status === 201) {
              this.closePopup();
              this.error = null;
              this.$emit("finishRegistration");
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
    analiticsRegistration() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_3",
      });
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
    margin-bottom: 10px;
    text-align: center;
  }
  &__subtitle {
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
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
