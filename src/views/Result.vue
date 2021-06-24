<template>
  <div class="result">
    <div class="result__content">
      <router-link
        class="result__refresh"
        @click="analiticsPlayAgain()"
        to="/#testScroll"
      >
        <img
          class="result__refresh-img"
          src="../assets/images/refresh.png"
          alt="refresh"
      /></router-link>
      <p class="result__text text-bold result__again">Пройти тест ще раз</p>
      <h3 class="result__title text-bold">
        {{ answer }}
        {{ answerText }}
      </h3>
      <p ref="paragrafOne" class="result__text result__text-paragraf">
        <!-- {{ result.paragrafOne }} -->
      </p>
      <p class="result__text result__text-paragraf">
        {{ result.paragrafTwo }}
      </p>
      <div class="result__btns">
        <Popup v-on:finishRegistration="openShare" v-if="takePart" />
        <PopupFinish v-if="share" :href="href" v-on:closeShare="closeShare" />
      </div>
    </div>
    <a
      class="result__share-fb"
      @click="analiticsShare()"
      href="https://www.facebook.com/sharer.php?u=https://huawei.vgorode.ua/index.html"
      target="_blank"
      ><img
        class="result__share-fb-img"
        src="../assets/images/share-fb.svg"
        alt="facebook"
    /></a>
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";
import PopupFinish from "@/components/PopupFinish.vue";
export default {
  name: "Result",
  data() {
    return {
      href: "",
      answer: 0,
      answerText: "правильних відповідей",
      share: false,
      takePart: true,
      result: {
        paragrafOne:
          "Ти лише на початку відкриттів, але добре знаєшся на рідних краях! Нехай поки що ти не знаєш багато про всі міста, головне, що початок покладено! Тепер залишилось тільки купити новенькі <a class='result__link' href='https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode' target='_blank'>Huawei FreeBuds 4i</a> та вирушати в дорогу, щоб відкрити для себе нові горизонти до найгарніших та найцікавіших українських міст!",
        paragrafTwo:
          "Якщо раптом ти вирішиш негайно вирушити у невеличку пригоду, а навушники виявились розрядженими — не хвилюйся. Huawei FreeBuds 4i  здатні зарядитись для 4-годинної роботи всього за 10 хвилин. Ти якраз встигнеш зібрати рюкзак!",
      },
      resultTwo: {
        paragrafOne:
          "Ти тільки на початку відкриттів, але гарно знаєшся на рідних краях! Нехай поки що ти не знаєш багато про всі міста, головне, що початок покладено! Тепер лишилось тільки купити новенькі <a class='result__link' href='https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode' target='_blank'>Huawei FreeBuds 4i</a> та відправлятися у дорогу, щоб відкрити для себе нові горизонти до найгарніших та найцікавіших українських міст! ",
        paragrafTwo:
          "А якщо раптом ти вирішиш негайно відправитись у невеличку пригоду, а навушники виявляться розрядженими - не хвилюйся. Huawei FreeBuds 4i здатні зарядитись для 4-годинної роботи всього за 10 хвилин. Ти якраз встигнеш зібрати рюкзак!",
      },
      resultThree: {
        paragrafOne:
          "Ти вже далеко від початку, та попереду ще так багато невідомого! Ти добре знаєш, як звучить Україна, але є ще чимало місць, які слід відвідати. Годі зволікати! Вирушай у подорож до нових відкриттів разом з <a class='result__link' href='https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode' target='_blank'>Huawei FreeBuds 4i</a>. Це навушники, які стануть найкращим компаньйоном у твоїй подорожі, адже вони можуть працювати без підзарядки до десяти годин! Якраз вистачить для того, щоб доїхати до тих місць, де ти ще не встиг побувати! ",
        paragrafTwo:
          "Крім того, Huawei FreeBuds 4i містять функцію шумозаглушення, тому, навіть якщо у потязі чи автобусі тобі трапляться галасливі сусіди - навушники врятують твій спокій. ",
      },
      resultFour: {
        paragrafOne:
          "Ти вже на рівні Птушкіна! І дуже добре знаєш, як звучить Україна! Проте ми впевнені, що вона ще зможе тебе здивувати! Наша порада — обирай навушники <a class='result__link' href='https://consumer.huawei.com/ua/audio/freebuds4i/?utm_source=vgorode' target='_blank'>Huawei FreeBuds 4i</a>, що працюють без підзарядки до 10 годин, тицяй у рандомну точку на мапі України та вирушай у дорогу. Повір, ненька ще має багато сюрпризів, які здивують тебе!",
        paragrafTwo:
          "Huawei FreeBuds 4i сумісні як з Android, так і з iOS. Натисни бічну кнопку на кейсі навушників і твій гаджет побачить Huawei FreeBuds 4i серед пристроїв для підключення по Bluetoоth.",
      },
    };
  },
  components: {
    Popup,
    PopupFinish,
  },
  mounted() {
    this.$refs.paragrafOne.innerHTML = this.result.paragrafOne;

    let resultNumber = this.$router.currentRoute.value.query.count;

    this.href = this.createUrlShare(resultNumber);
    switch (+resultNumber) {
      case 10:
        this.answerText = "правильна відповідь";
        break;
      case 20:
        this.result = this.resultTwo;
        this.answerText = "правильні відповіді";
        break;
      case 30:
        this.result = this.resultTwo;
        this.answerText = "правильні відповіді";
        break;
      case 40:
        this.result = this.resultThree;
        this.answerText = "правильні відповіді";
        break;
      case 50:
        this.result = this.resultThree;
        this.answerText = "правильних відповідей";
        break;
      case 60:
        this.result = this.resultFour;
        this.answerText = "правильних відповідей";
        break;
      case 70:
        this.result = this.resultFour;
        this.answerText = "правильних відповідей";
        break;
      default:
        this.answerText = "правильних відповідей";
    }

    if (this.$router.currentRoute.value.query.count) {
      this.answer = this.$router.currentRoute.value.query.count / 10;
      let query = Object.assign({}, this.$route.query);
      delete query.count;
      this.$router.replace({ query });
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    createUrlShare(result) {
      return `https://www.facebook.com/sharer.php?u=https://huawei.vgorode.ua/share/share-${
        result / 10
      }.html`;
    },
    openShare() {
      this.share = true;
    },
    closeShare() {
      this.share = false;
      this.takePart = false;
    },
    analiticsShare() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_2",
      });
    },
    analiticsPlayAgain() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_5",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  min-height: 100vh;
  background: url("../assets/images/test_bg.png") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  @media (max-width: 350px) {
    align-items: flex-start;
  }
  &__content {
    max-width: 670px;
    width: 100%;
  }
  &__refresh {
    display: block;
    width: 80px;
    margin: 0 auto 15px;
    @media (max-width: 350px) {
      margin: 10px auto;
    }
    &-img {
      @media (max-width: 350px) {
        width: 60px;
      }
    }
  }
  &__text {
    font-size: 18px;
    line-height: 21px;
    @media (max-width: 350px) {
      font-size: 16px;
      line-height: 17px;
    }
    &-paragraf {
      margin-bottom: 25px;
      padding: 0 10px;
      @media (max-width: 600px) {
        margin-bottom: 10px;
      }
      &:nth-child(5) {
        margin-bottom: 35px;
        @media (max-width: 600px) {
          margin-bottom: 10px;
        }
      }
    }
  }
  &__again {
    margin-bottom: 35px;
    @media (max-width: 600px) {
      margin-bottom: 10px;
    }
  }
  &__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  &__btns {
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__share-fb {
    position: fixed;
    bottom: 30px;
    right: 30px;
    &-img {
      max-width: 50px;
    }
  }
}
</style>
<style>
.result__link {
  font-weight: bold;
}
</style>
