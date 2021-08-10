<template>
  <div class="main">
    <div class="container container_small">
      <div class="header">
        <div class="logo">
          <a
            href="https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode"
            target="_blank"
          >
            <img
              class="logo__huawei"
              src="../assets/images/logo__huawei.png"
              alt=""
          /></a>
          <a href="https://vgorode.ua/" target="_blank">
            <img
              class="logo__vgorode"
              src="../assets/images/logo__vgorode.png"
              alt=""
          /></a>
        </div>
        <div class="main__right">
          <a
            class="main__rules"
            href="https://kiev.vgorode.ua/news/sobytyia/a1168063-pravila-uchasti-u-konkursi-jak-zvuchit-ukrajina"
            target="_blank"
            >правила</a
          >
          <a
            class="main__rules"
            href="https://kiev.vgorode.ua/news/sobytyia/a1172352-peremozhtsi-rozihrashu-v-proekti-jak-zvuchit-ukrajina-vid-huawei"
            target="_blank"
            >переможці</a
          >
        </div>
      </div>
      <h4 class="main__test">тест</h4>
      <h1 class="title">Як звучить Україна</h1>
      <h2 class="subtitle">
        З <span class="text-red">Huawei</span> FreeBuds 4i
      </h2>
      <p class="main__text">
        Кожне місто в Україні по-своєму унікальне та особливе. А також кожне із
        них винятково звучить.
      </p>
      <p class="main__text">
        Давай разом з Huawei FreeBuds 4i перевіримо, наскільки добре ти
        розбираєшся у звучанні різних міст України.
      </p>
      <a class="main__link" href="#testScroll" @click="analitics()"
        >Перевірити себе</a
      >
      <div class="arrow-down is-mobile">
        <a href="#steap">
          <img
            class="arrow-down__img"
            src="../assets/images/down-arrow.svg"
            alt=""
        /></a>
      </div>
    </div>
    <div class="steap" id="steap">
      <div class="steap__item">
        <h4 class="steap__title">крок 1</h4>
        <p class="steap__text">Визначай міста України за їх звучанням.</p>
      </div>
      <div class="steap__item">
        <h4 class="steap__title">крок 2</h4>
        <p class="steap__text">Реєструйся.</p>
      </div>
      <div class="steap__item">
        <h4 class="steap__title">крок 3</h4>
        <p class="steap__text">
          Роби шер результату на власній сторінці у соцмережі Facebook.
        </p>
      </div>
      <div class="steap__item">
        <h4 class="steap__title">крок 4</h4>
        <p class="steap__text">
          Бери участь у розіграші навушників Huawei FreeBuds 4i. Буде три
          переможці, кожен отримає свою пару Huawei FreeBuds 4i.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    analitics() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_1",
      });
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.logo {
  margin: 40px 0 46px;
  @media (max-width: 1600px) {
    margin: 20px 0;
  }
  @media (max-width: 1366px) {
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  &__huawei {
    margin-right: 30px;
  }
}
.main {
  width: calc(100vw - 17px);
  height: 80vh;
  background: url("../assets/images/main_bg.png") center no-repeat;
  background-size: cover;
  position: relative;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 50vh;
  }
  @media (max-width: 600px) {
    background: url("../assets/images/main__bg-mob.png") center no-repeat;
    background-size: cover;
    height: 100vh;
  }
  &__right {
    display: flex;
    flex-direction: column;
  }
  &__test,
  &__rules {
    font-family: "Huawei Bold", sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #fff;
    text-shadow: 0px 6px 9px rgba(0, 0, 0, 0.36);
    @media (max-width: 1366px) {
      font-size: 32px;
      line-height: 32px;
    }
    @media (max-width: 600px) {
      font-size: 36px;
      line-height: 42px;
    }
  }
  &__rules {
    color: #8d8d8d;
    @media (max-width: 600px) {
      font-size: 26px;
      line-height: 32px;
    }
  }
  &__text {
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    margin-bottom: 15px;
    max-width: 493px;
    &:nth-last-child(2) {
      margin-bottom: 30px;
      @media (max-width: 1600px) {
        margin-bottom: 15px;
      }
    }
    @media (max-width: 1366px) {
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
  &__link {
    border: 1px solid #fff;
    border-radius: 30px;
    width: 285px;
    height: 48px;
    display: inline-block;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    padding: 14px 0 14px 33px;
    position: relative;
    @media (max-width: 600px) {
      margin: 0 auto;
    }
    &::after {
      content: "";
      position: absolute;
      background: url("../assets/images/link_test.png") center no-repeat;
      width: 69px;
      height: 77px;
      right: 10px;
      top: -15px;
    }
  }
}
.steap {
  position: absolute;
  max-width: 1500px;
  width: 95%;
  height: 220px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -150px;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  @media (max-width: 1600px) {
    height: 160px;
    bottom: -115px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 15px 0;
    bottom: -470px;
  }
  @media (max-width: 600px) {
    bottom: -100%;
    left: -15px;
    width: 100vw;
    box-shadow: none;
  }
  &__item {
    height: 140px;
    max-width: 340px;
    text-align: center;
    font-family: "Huawei Bold", sans-serif;
    @media (max-width: 1600px) {
      height: 130px;
    }
    @media (max-width: 1024px) {
      min-width: 120px;
    }
    @media (max-width: 600px) {
      height: auto;
    }
  }
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    color: #a41621;
    margin-bottom: 14px;
    @media (max-width: 1600px) {
      font-size: 32px;
      margin-bottom: 5px;
    }
    @media (max-width: 600px) {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 15px;
    }
  }
  &__text {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
}
@keyframes arrowDown {
  0% {
    bottom: 0;
  }
  50% {
    bottom: -30px;
  }
  100% {
    bottom: 0;
  }
}
</style>
