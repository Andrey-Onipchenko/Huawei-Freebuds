<template>
  <div class="description" @mousemove="bg($event)" ref="description">
    <div class="description__bg" ref="descriptionBg"></div>
    <div class="container">
      <Test />
      <h2 class="description__title">
        <a
          href="https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode"
          target="_blank"
          ><span class="text-bold">Huawei</span> FreeBuds 4i</a
        >
      </h2>
      <div class="feature">
        <div class="feature__row">
          <div class="feature__item feature__item-left">
            <p class="text-bold">Система активного шумозаглушення (ANC)</p>
            <p>
              Huawei FreeBuds 4i самостійно виявляють навколишній шум за
              допомогою мікрофонів і генерують зворотну звукову хвилю для його
              зменшення. Один тривалий дотик до наушника дозволить змінювати
              режим активного шумозаглушення на режим «прозорості» (чути звуки
              довкола) і навпаки
            </p>
            <p class="text-bold">10 годин музики NON-STOP</p>
            <p>
              10 годин відтворення музики і 7,5 годин голосових викликів на
              одному заряді без кейса
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
            <!-- <div
              class="feature__line-left-top-mobile"
              @click="featureOpen('leftTop')"
            ></div> -->

            <div
              class="feature__line-left-center"
              @click="featureOpen('leftCenter')"
            ></div>

            <div
              class="feature__line-right-top"
              @click="featureOpen('rightTop')"
            ></div>
            <div
              class="feature__line-right-bottom"
              @click="featureOpen('rightBottom')"
            ></div>

            <div
              class="feature__line-bottom"
              @click="featureOpen('bottomRight')"
            ></div>
          </div>
          <div class="feature__item feature__item-right">
            <p class="text-bold">Сумісність с Android, iOS і Windows</p>
            <p>
              Натисніть бічну кнопку на кейсі навушників і ваш гаджет побачить
              Huawei FreeBuds 4i серед пристроїв для підключення по Bluetoоth
            </p>

            <p class="text-bold">
              Швидка зарядка: 10 хвилин = 4 години використання
            </p>
            <p>
              Опустіть навушники в кейс на 10 хвилин, щоб ще 4 години
              насолоджуватись улюбленим аудіо без необхідності довго чекати
              підзарядки
            </p>
          </div>
        </div>
        <div class="feature__row feature__row-bottom">
          <div class="feature__item feature__bottom">
            <p class="text-bold feature__bottom-title">
              Зручний і сучасний дизайн
            </p>
            <p>
              Легкий кейс округлої форми з природним вигином, що нагадує гальку.
              Керамічно-білі, вугільно-чорні чи насичено-червоні — ці навушники
              наповнять ваші дні та ночі стилем.
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
          title: "Система активного шумозаглушення (ANC)",
          text: "Huawei FreeBuds 4i самостійно виявляють навколишній шум за допомогою мікрофонів і генерують зворотну звукову хвилю для його зменшення. Один тривалий дотик до наушника дозволить змінювати режим активного шумозаглушення на режим «прозорості» (чути звуки довкола) і навпаки",
        },
        leftCenter: {
          title: "10 годин музики  NON-STOP",
          text: "10 годин відтворення музики і 7,5 годин голосових викликів на одному заряді без кейса",
        },
        rightTop: {
          title: "Сумісність с Android, iOS і Windows",
          text: "Натисніть бічну кнопку на кейсі навушників і ваш гаджет побачить Huawei FreeBuds 4i  серед пристроїв для підключення по Bluetoоth",
        },
        rightCenter: {
          title: "Ергономічна форма",
          text: "Ідеально поміщається у долоні",
        },
        rightBottom: {
          title: "Швидка зарядка: 10 хвилин = 4 години використання",
          text: "Опустіть навушники в кейс на 10 хвилин, щоб ще 4 години насолоджуватись улюбленим аудіо без необхідності довго чекати підзарядки",
        },
        bottomRight: {
          title: "Зручний і сучасний дизайн",
          text: "Легкий кейс  округлої форми з природним вигином, що нагадує гальку. Керамічно-білі, вугільно-чорні чи насичено-червоні — ці навушники наповнять ваші дні та ночі стилем.",
        },
        bottomLeft: {
          title: "Автоматичне підключення до смартфону",
          text: "Просто відкрийте чохол-акумулятор, і на вашому смартфоні або планшеті з’явиться пропозиція встановити зв’язок з Huawei FreeBuds 4i.8 Зробіть це, і надалі навушники будуть автоматично підключатися до вашого пристрою, коли ви відкриваєте чохол.",
        },
      },
    };
  },
  components: {
    Test,
  },
  mounted() {
    this.$refs.descriptionBg.style.height = `${this.$refs.description.clientHeight}px`;
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
    bg(event) {
      let containerWidth = this.$refs.descriptionBg.clientWidth,
        containerHeight = this.$refs.descriptionBg.clientHeight,
        mousePositionX = (event.pageX / containerWidth) * 100,
        mousePositionY = (event.pageY / containerHeight) * 100;
      this.$refs.descriptionBg.style.backgroundPosition = `${mousePositionX}% ${mousePositionY}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  overflow: hidden;
  padding-top: 200px;
  position: relative;
  &__bg {
    width: 100%;
    height: 1979px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../assets/images/notes.png") center no-repeat;
    @media (max-width: 600px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding-top: 500px;
  }
  @media (max-width: 600px) {
    padding-top: 100vh;
  }
  &__title {
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    text-align: center;
    color: #000000;
    position: relative;
    z-index: 1;
    @media (max-width: 1366px) {
      font-size: 58px;
      line-height: 64px;
    }
    @media (max-width: 360px) {
      font-size: 48px;
      line-height: 56px;
    }
  }
}
.feature {
  margin-bottom: 85px;
  position: relative;
  @media (max-width: 1366px) {
    margin: -30px 0 0;
  }
  @media (max-width: 1024px) {
    margin: 0;
  }
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
      @media (max-width: 1366px) {
        justify-content: space-around;
        margin: -80px 0 10px;
      }
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
      font-size: 16px;
      line-height: 18px;
      height: 440px;
    }
    @media (max-width: 1024px) {
      height: 520px;
    }
    @media (max-width: 350px) {
      height: 440px;
    }
    &-left {
      text-align: right;
      padding-right: 40px;
      @media (max-width: 1366px) {
        justify-content: flex-start;
        padding-top: 80px;
      }
      p:nth-child(2) {
        margin-bottom: 60px;
        @media (max-width: 1366px) {
          margin-bottom: 40px;
        }
      }
      p:nth-child(4) {
        max-width: 370px;
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
        margin-bottom: 100px;
        width: 100%;
        @media (max-width: 1366px) {
          margin-bottom: 70px;
          max-width: 270px;
        }
      }
      p:nth-child(3) {
        max-width: 360px;
      }
      p:nth-child(4) {
        max-width: 390px;
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
        top: 140px;
        right: auto;
        left: 235px;
      }
      @media (max-width: 600px) {
        top: 30%;
        left: 46%;
      }
      @media (max-width: 375px) {
        top: 32%;
        left: 45%;
      }
    }
    &-left-center {
      position: absolute;
      top: 360px;
      left: -20px;
      width: 105px;
      background: #8f8f8f;
      height: 2px;
      @media (max-width: 1366px) {
        top: 273px;
        width: 120px;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        left: 105px;
        top: 320px;
      }
      @media (max-width: 600px) {
        left: 18%;
        top: 58%;
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
        width: 80px;
        height: 50px;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        right: 75px;
        top: 85px;
        left: 395px;
      }
      @media (max-width: 600px) {
        top: 23%;
        left: 82%;
      }
    }
    &-right-bottom {
      position: absolute;
      top: 330px;
      left: 420px;
      width: 70px;
      background: #8f8f8f;
      height: 2px;
      @media (max-width: 1366px) {
        top: 270px;
        left: 360px;
        width: 60px;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        top: 280px;
        left: 400px;
        right: 85px;
      }
      @media (max-width: 600px) {
        top: 50%;
        left: 83%;
      }
    }
    &-bottom {
      position: absolute;
      bottom: 0;
      left: -20px;
      right: 0;
      margin: 0 auto;
      width: 2px;
      background: #8f8f8f;
      height: 135px;
      @media (max-width: 1366px) {
        height: 35px;
        bottom: 80px;
        left: 0;
      }
      @media (max-width: 1024px) {
        width: 30px;
        height: 30px;
        background: url("../assets/images/circle.svg") center no-repeat;
        background-size: contain;
        bottom: 135px;
        left: 5px;
      }
      @media (max-width: 600px) {
        bottom: 30%;
      }
    }
  }
  &__bottom {
    justify-content: flex-start;
    text-align: center;
    height: auto;
    &-title {
      margin: 0 auto;
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
  z-index: 2;
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
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    margin-top: -50px;
  }
  @media (max-width: 600px) {
    margin-top: -100px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__item {
    max-width: 165px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 600px) {
      max-width: 35%;
    }
    &:nth-child(2) {
      align-items: center;
      @media (max-width: 600px) {
        align-items: flex-start;
      }
    }
    &:nth-child(3) {
      align-items: flex-start;
      @media (max-width: 600px) {
        align-items: center;
      }
    }
    &-center {
      margin: 0 65px;
      @media (max-width: 600px) {
        margin: 0 0 20px;
      }
    }
  }
  &__bullet {
    width: 48px;
    height: 48px;
    background: linear-gradient(180deg, #4a4b4d 0%, #0b0b0b 100%);
    border-radius: 50%;
    margin-bottom: 24px;
    cursor: pointer;
    @media (max-width: 1366px) {
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
    @media (max-width: 1024px) {
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
    }
    @media (max-width: 600px) {
      width: 24px;
      height: 24px;
    }
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
    @media (max-width: 1366px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 21px;
    }
    @media (max-width: 360px) {
      font-size: 15px;
      line-height: 17px;
    }
  }
}
</style>
