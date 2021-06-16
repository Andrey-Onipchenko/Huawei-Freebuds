<template>
  <div class="popup-finish">
    <div class="popup-finish__content">
      <button class="popup-finish__close" @click="closeShare"></button>
      <h3 class="popup-finish__title">Вітаємо! Ви зареєстровані</h3>
      <p class="popup-finish__text">
        Не забудьте зробити шер результату на власній сторінці у соцмережі
        Facebook, це умова участі у розіграші.
      </p>
      <a
        class="popup-finish__share btn-result"
        @click="analiticsShare()"
        :href="href"
        target="_blank"
        >Поділитись</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupFinish",
  props: {
    href: {
      type: String,
      default: "",
    },
  },
  emits: ["closeShare"],
  methods: {
    closeShare() {
      this.$emit("closeShare");
    },
    analiticsShare() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_2",
      });
    },
  },
};
</script>

<style lang="scss">
.popup-finish {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  &__close {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 10px;
    right: 10px;
    background: url("../assets/images/close.svg") center no-repeat;
  }
  &__content {
    max-width: 400px;
    padding: 30px;
    border-radius: 10px;
    background: #fff;
    color: #000;
    position: relative;
  }
  &__title {
    margin-bottom: 15px;
  }
  &__text {
    margin-bottom: 15px;
  }
  &__share {
    background: #1877f2;
    position: relative;
    color: #fff;
    @media (max-width: 600px) {
      flex-direction: column;
      margin-bottom: 15px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 20px;
      background: url("../assets/images/share.svg") center no-repeat;
      top: 50%;
      transform: translateY(-50%);
      right: 28%;
    }
  }
}
</style>
