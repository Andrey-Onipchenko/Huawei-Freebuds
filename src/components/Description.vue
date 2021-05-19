<template>
  <div class="description">
    <div class="container">
      <Test />
      <h2 class="description__title">
        <span class="text-bold">Huawei</span> Freebuds 4i
      </h2>
      <div class="feature">
        <div class="feature__row">
          <div class="feature__item feature__item-left">
            <p class="text-bold">Активне приглушення шуму</p>
            <p>
              Датчики у навушниках активно визначають та компенсують шум
              середовища. Де б ви не були, ви завжди можете зануритися в
              улюблену музику
            </p>
            <p class="text-bold">Висока автономність</p>
            <p>
              Повний заряд:
              <span class="text-bold">10 годин</span> прослуховування музики
              <span class="text-bold">10 хвилин </span> заряджання для
              <span class="text-bold">4 годин</span> автономності
            </p>
          </div>
          <div
            ref="slideColor"
            class="feature__item feature__item-center feature-white"
          >
            <div
              class="feature__line-left-top"
              @click="featureOpen('leftTop')"
            ></div>
            <div
              class="feature__line-left-top-mobile"
              @click="featureOpen('leftTop')"
            ></div>

            <div
              class="feature__line-left-center"
              @click="featureOpen('leftCenter')"
            ></div>

            <div
              class="feature__line-right-top"
              @click="featureOpen('rightTop')"
            ></div>
            <div
              class="feature__line-right-center"
              @click="featureOpen('rightCenter')"
            ></div>
            <div
              class="feature__line-right-bottom"
              @click="featureOpen('rightBottom')"
            ></div>

            <div
              class="feature__line-bottom"
              @click="featureOpen('bottomRight')"
            ></div>
            <div
              class="feature__line-bottom-left"
              @click="featureOpen('bottomLeft')"
            ></div>
          </div>
          <div class="feature__item feature__item-right">
            <p class="text-bold">Легкість</p>
            <p>Зменшення тиску на ваші вуха</p>
            <p class="text-bold">Ергономічна форма</p>
            <p>Ідеально поміщається у долоні</p>
            <p class="text-bold">Естетика</p>
            <p>Пласка поверхня кейсу</p>
          </div>
        </div>
        <div class="feature__row feature__row-bottom">
          <div class="feature__item feature__bottom-left">
            <p>
              <span class="text-bold">Дизайн</span> <br />
              Дизайн Компактний чохол-акумулятор має оригінальний дизайн і
              гладеньку поверхню. Плавні обриси і дзеркальне полірування
              навушників надають вам сучасного та непересічного вигляду.
              Керамічно-білі, вугільно-чорні чи червоні <br />
              — вони наповнять ваші дні та ночі стилем.
            </p>
          </div>
          <div class="feature__item feature__bottom-right">
            <p class="text-bold"></p>
            <p>
              <span class="text-bold">
                Автоматичне підключення до смартфону
              </span>
              <br />
              Просто відкрийте чохол-акумулятор, і на вашому смартфоні або
              планшеті з’явиться пропозиція встановити зв’язок з HUAWEI FreeBuds
              4i.8 Зробіть це, і надалі навушники будуть автоматично
              підключатися до вашого пристрою, коли ви відкриваєте чохол.
            </p>
          </div>
        </div>
        <div
          class="feature-popup"
          :class="isOpenFeature && 'feature-popup__open'"
        >
          <div class="feature-popup__wrap">
            <button
              class="feature-popup__close"
              @click="featureClose()"
            ></button>
            <h4 class="feature-popup__title">{{ featureOut.title }}</h4>
            <p class="feature-popup__text">
              {{ featureOut.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="change-color">
        <div class="change-color__item">
          <div
            @click="changeColor('feature-black')"
            class="change-color__bullet"
          ></div>
          <p class="change-color__text">Carbon Black</p>
        </div>
        <div class="change-color__item change-color__item-center">
          <div
            @click="changeColor('feature-red')"
            class="change-color__bullet change-color__bullet_red"
          ></div>
          <p class="change-color__text">Red Edition</p>
        </div>
        <div class="change-color__item">
          <div
            @click="changeColor('feature-white')"
            class="change-color__bullet change-color__bullet_white"
          ></div>
          <p class="change-color__text">Ceramic White</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  name: "Description",
  data() {
    return {
      isOpenFeature: false,
      featureOut: { title: "title", text: "text" },
      featuredata: {
        leftTop: {
          title: "Активне приглушення шуму",
          text:
            "Датчики у навушниках активно визначають та компенсують шум середовища. Де б ви не були, ви завжди можете зануритися в улюблену музику",
        },
        leftCenter: {
          title: "Висока автономність",
          text:
            "Повний заряд: 10 годин прослуховування музики 10 хвилин заряджання для 4 годин автономності",
        },
        rightTop: {
          title: "Легкість",
          text: "Зменшення тиску на ваші вуха",
        },
        rightCenter: {
          title: "Ергономічна форма",
          text: "Ідеально поміщається у долоні",
        },
        rightBottom: {
          title: "Естетика",
          text: "Пласка поверхня кейсу",
        },
        bottomRight: {
          title: "Дизайн",
          text:
            "Компактний чохол-акумулятор має оригінальний дизайн і гладеньку поверхню. Плавні обриси і дзеркальне полірування навушників надають вам сучасного та непересічного вигляду. Керамічно-білі, вугільно-чорні чи червоні — вони наповнять ваші дні та ночі стилем.",
        },
        bottomLeft: {
          title: "Автоматичне підключення до смартфону",
          text:
            "Просто відкрийте чохол-акумулятор, і на вашому смартфоні або планшеті з’явиться пропозиція встановити зв’язок з HUAWEI FreeBuds 4i.8 Зробіть це, і надалі навушники будуть автоматично підключатися до вашого пристрою, коли ви відкриваєте чохол.",
        },
      },
    };
  },
  components: {
    Test,
  },
  methods: {
    changeColor(prop) {
      if (this.$refs.slideColor.classList.contains("feature-white")) {
        this.$refs.slideColor.classList.remove("feature-white");
      } else if (this.$refs.slideColor.classList.contains("feature-black")) {
        this.$refs.slideColor.classList.remove("feature-black");
      } else {
        this.$refs.slideColor.classList.remove("feature-red");
      }
      this.$refs.slideColor.classList.add(`${prop}`);
    },
    featureOpen(feature) {
      this.featureOut = this.featuredata[feature];
      this.isOpenFeature = true;
    },
    featureClose() {
      this.isOpenFeature = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  overflow: hidden;
  padding-top: 200px;
  background: url("../assets/images/notes.png") center no-repeat;
  &__title {
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #000000;
  }
}
.feature {
  margin-bottom: 85px;
  position: relative;
  &-black {
    background: url("../assets/images/huawei_black.png") no-repeat;
    @media (max-width: 1366px) {
      background-position: center center;
      background-size: contain;
    }
  }
  &-red {
    background: url("../assets/images/huawei_red.png") no-repeat;
    @media (max-width: 1366px) {
      background-position: center center;
      background-size: contain;
    }
  }
  &-white {
    background: url("../assets/images/huawei_white.png") no-repeat;
    @media (max-width: 1366px) {
      background-position: center;
      background-size: contain;
    }
  }
  &__row {
    display: flex;
    &-bottom {
      justify-content: center;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
  &__item {
    width: 33%;
    height: 520px;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 1366px) {
      font-size: 18px;
      height: 440px;
    }
    @media (max-width: 1024px) {
      height: 445px;
    }
    &-left {
      text-align: right;
      padding-right: 40px;
      p:nth-child(2) {
        max-width: 385px;
        margin-bottom: 30px;
      }
      p:nth-child(4) {
        max-width: 265px;
        @media (max-width: 1366px) {
          max-width: 340px;
        }
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
    &-center {
      position: relative;
      @media (max-width: 1024px) {
        width: 500px;
        margin: 0 auto;
      }
    }

    &-right {
      align-items: flex-start;
      justify-content: flex-start;
      padding-top: 90px;
      padding-left: 20px;

      p:nth-child(2),
      p:nth-child(4) {
        max-width: 240px;
        margin-bottom: 50px;
        width: 100%;
        @media (max-width: 1366px) {
          max-width: 270px;
        }
      }
      p:nth-child(4) {
        margin-bottom: 15px;
      }
      @media (max-width: 1440px) {
        padding-left: 40px;
      }
      @media (max-width: 1366px) {
        padding-left: 0;
        padding-top: 80px;
      }
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
  &__line {
    &-left-top {
      position: absolute;
      top: 105px;
      left: -20px;
      background: url("../assets/images/line-left_top.png") center no-repeat;
      width: 340px;
      height: 55px;
      @media (max-width: 1366px) {
        top: 90px;
        width: 300px;
        background-size: contain;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        top: 152px;
        right: auto;
        left: 135px;
      }
      &-mobile {
        display: none;
        @media (max-width: 1024px) {
          display: block;
          position: absolute;
          top: 155px;
          right: 170px;
          width: 30px;
          height: 30px;
          background: url("../assets/images/circle.svg") center no-repeat;
          background-size: contain;
        }
      }
    }
    &-left-center {
      position: absolute;
      top: 305px;
      left: -20px;
      width: 85px;
      background: #8f8f8f;
      height: 2px;
      @media (max-width: 1366px) {
        top: 265px;
        width: 120px;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        left: 50px;
      }
    }
    &-right-top {
      position: absolute;
      left: 395px;
      top: 105px;
      background: url("../assets/images/line-right_top.png") center no-repeat;
      width: 90px;
      height: 55px;
      @media (max-width: 1366px) {
        left: 345px;
        top: 93px;
        background-size: contain;
        width: 65px;
        height: 40px;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        right: 75px;
        top: 90px;
      }
    }
    &-right-center {
      position: absolute;
      top: 240px;
      left: 440px;
      width: 50px;
      background: #8f8f8f;
      height: 2px;

      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        right: 55px;
      }
    }
    &-right-bottom {
      position: absolute;
      top: 337px;
      left: 415px;
      width: 75px;
      background: #8f8f8f;
      height: 2px;
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        top: 325px;
        right: 85px;
      }
    }
    &-bottom {
      position: absolute;
      bottom: 0;
      left: 172px;
      width: 2px;
      background: #8f8f8f;
      height: 135px;
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        bottom: 40px;
        left: 150px;
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 138px;
        width: 2px;
        background: #8f8f8f;
        height: 135px;
        @media (max-width: 1024px) {
          content: none;
        }
      }
      &-left {
        display: none;
        @media (max-width: 1024px) {
          display: block;
          position: absolute;
          width: 30px;
          height: 30px;
          background: url("../assets/images/circle.svg") center no-repeat;
          background-size: contain;
          bottom: 40px;
          left: 310px;
        }
      }
    }
  }
  &__bottom {
    justify-content: flex-start;
    &-left {
      height: auto;
      text-align: right;
      max-width: 465px;
      margin-right: 65px;
    }
    &-right {
      height: auto;
      text-align: left;
      justify-content: flex-start;
    }
  }
}
.feature-popup {
  position: absolute;
  top: 0px;
  left: 0px;
  background: #fff;
  max-width: 400px;
  padding: 50px 20px 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: none;
  &__open {
    display: block;
  }
  &__close {
    width: 32px;
    height: 32px;
    background: url("../assets/images/close.svg");
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
.change-color {
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
  &__item {
    max-width: 165px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &:nth-child(2) {
      align-items: center;
    }
    &:nth-child(3) {
      align-items: flex-start;
    }
    &-center {
      margin: 0 65px;
    }
  }
  &__bullet {
    width: 48px;
    height: 48px;
    background: linear-gradient(180deg, #4a4b4d 0%, #0b0b0b 100%);
    border-radius: 50%;
    margin-bottom: 24px;
    cursor: pointer;
    &_red {
      background: linear-gradient(180deg, #b2252d 0%, #a40c15 100%);
    }
    &_white {
      background: linear-gradient(180deg, #f4f5f9 0%, #e8e9ec 100%);
    }
  }
  &__text {
    font-size: 24px;
    line-height: 28px;
    color: #000;
  }
}
</style>
