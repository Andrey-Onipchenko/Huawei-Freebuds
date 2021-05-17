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
          <div class="feature__item feature__item-center">
            <img
              class="feature__line-left-top"
              src="../assets/images/line-left_top.png"
              alt="line"
            />
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
      </div>
    </div>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  name: "Description",
  components: {
    Test,
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
  &__row {
    display: flex;
    &-bottom {
      justify-content: center;
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
    &-left {
      text-align: right;
      padding-right: 30px;
      p:nth-child(2) {
        max-width: 385px;
        margin-bottom: 30px;
      }
      p:nth-child(4) {
        max-width: 265px;
      }
    }
    &-center {
      background: url("../assets/images/huawei_white.png") no-repeat;
      //   background-position: center 40px;
      position: relative;
    }
    &-right {
      align-items: flex-start;

      p:nth-child(2),
      p:nth-child(4) {
        max-width: 240px;
        margin-bottom: 50px;
        width: 100%;
      }
      p:nth-child(4) {
        margin-bottom: 15px;
      }
    }
  }
  &__line {
    &-left-top {
      position: absolute;
      top: 105px;
      left: -20px;
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
</style>
