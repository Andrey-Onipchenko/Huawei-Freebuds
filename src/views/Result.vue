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
        {{ answer === 1 ? "вірна відповідь" : "вірних відповідей" }}
      </h3>
      <p class="result__text result__text-paragraf">
        {{ result.paragrafOne }}
      </p>
      <p class="result__text result__text-paragraf">
        {{ result.paragrafTwo }}
      </p>
      <div class="result__btns">
        <Popup v-on:finishRegistration="openShare" v-if="takePart" />
        <PopupFinish v-if="share" :href="href" v-on:closeShare="closeShare" />
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";
import PopupFinish from "@/components/PopupFinish.vue";
export default {
  name: "Result",
  data() {
    return {
      href: "https://www.facebook.com/sharer.php?u=https://huawei.vgorode.ua/shareOne.html",
      answer: 0,
      share: false,
      takePart: true,
      result: {
        paragrafOne:
          "Ти тільки на шляху до нових відкриттів! Не засмучуйся! Нехай зараз ти ще  не знаєш, як звучить вся Україна, але ми впевнені, ти точно усе  надолужиш. Особливо, якщо ти матимеш навушники Huawei FreeBuds 4i, адже з ними так приємно подорожувати! Їхнього заряду вистачає на 10 годин  безперервної роботи, а цього часу цілком достатньо, щоб дістатися до іншого міста!",
        paragrafTwo:
          "І звісно, підкорювати нові горизонти хочеться тільки у компанії гарних людей і речей. Люди - це за тобою, а от з Huawei FreeBuds 4i ти завжди матимеш під рукою зручний та сучасний девайс. З яким навіть натюрморт із  плакцартним обідом виглядатиме стильно.",
      },
      resultTwo: {
        paragrafOne:
          "Ти тільки на початку відкриттів, але гарно знаєшся на рідних краях! Нехай поки що ти не знаєш багато про всі міста, головне, що початок покладено! Тепер лишилось тільки купити новенькі Huawei FreeBuds 4i та відправлятися у дорогу, щоб відкрити для себе нові горизонти до найгарніших та найцікавіших українських міст! ",
        paragrafTwo:
          "А якщо раптом ти вирішиш негайно відправитись у невеличку пригоду, а навушники виявляться розрядженими - не хвилюйся. Huawei FreeBuds 4i здатні зарядитись для 4-годинної роботи всього за 10 хвилин. Ти якраз встигнеш зібрати рюкзак!",
      },
      resultThree: {
        paragrafOne:
          "Ти вже далеко від початку, та попереду ще так багато невідомого! Ти добре знаєш, як звучить Україна, але є ще чимало місць, які слід відвідати. Годі зволікати! Вирушай у подорож до нових відкриттів разом з Huawei FreeBuds 4i. Це навушники, які стануть найкращим компаньйоном у твоїй подорожі, адже вони можуть працювати без підзарядки до десяти годин! Якраз вистачить для того, щоб доїхати до тих місць, де ти ще не встиг побувати! ",
        paragrafTwo:
          "Крім того, Huawei FreeBuds 4i містять функцію шумозаглушення, тому, навіть якщо у потязі чи автобусі тобі трапляться галасливі сусіди - навушники врятують твій спокій. ",
      },
      resultFour: {
        paragrafOne:
          "Ти вже на рівні Птушкіна! І дуже добре знаєш, як звучить Україна! Проте ми впевнені, що вона ще зможе тебе здивувати! Наша порада - обирай навушники Huawei FreeBuds 4i, що працюють без підзарядки до 10 годин, тикай у рандомну точку на мапі України та відправляйся у дорогу. Повір, ненька ще має багато сюрпризів, щоб здивувати тебе!",
        paragrafTwo:
          "Huawei FreeBuds 4i однаково сумісні як з iOS, так і з Android. А ще вони автоматично підключаються до твого девайсу, одразу, як ти відкриєш кришку кейса.",
      },
    };
  },
  components: {
    Popup,
    PopupFinish,
  },
  mounted() {
    let resultNumber = this.$router.currentRoute.value.query.count;

    this.href = this.createUrlShare(resultNumber);
    switch (+resultNumber) {
      case 10:
        break;
      case 20:
        this.result = this.resultTwo;
        break;
      case 30:
        this.result = this.resultTwo;
        break;
      case 40:
        this.result = this.resultThree;
        break;
      case 50:
        this.result = this.resultThree;
        break;
      case 60:
        this.result = this.resultFour;
        break;
      case 70:
        this.result = this.resultFour;
        break;
      default:
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
      return `https://www.facebook.com/sharer.php?u=https://huawei.vgorode.ua/share-${
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

    analiticsPlayAgain() {
      this.$gtag.event("click", {
        event_category: "huawei",
        event_label: "b_4",
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
}
</style>
