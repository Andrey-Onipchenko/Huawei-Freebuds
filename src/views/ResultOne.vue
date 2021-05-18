<template>
  <div class="result">
    <div class="result__content">
      <router-link class="result__refresh" to="/#testScroll">
        <img src="../assets/images/refresh.png" alt="refresh"
      /></router-link>
      <p class="result__text text-bold result__again">Пройти тест ще раз</p>
      <h3 class="result__title text-bold">6 вірних відповідей</h3>
      <p class="result__text result__text-paragraf">
        Ти - тільки на шляху до нових відкриттів! Не засмучуйся! Нехай зараз ти
        ще не знаєш, як звучить вся Україна, але ми впевнені, ти точно усе
        надолужиш. Особливо, якщо у тебе будут навушники Huawei Freebuds 4i,
        адже з ними так приємно подорожувати! Їхнього заряду вистачає на 10
        годин безперервної роботи, а цього часу цілком достатньо, щоб дістатися
        до іншого міста!
      </p>
      <p class="result__text result__text-paragraf">
        Крім того, навушники Huawei Freebuds 4i містять функцію шумозаглушення,
        тому, навіть якщо у поїзді чи автобусі тобі трапляться галасливі сусіди
        - навушники врятують твій спокій.
      </p>
      <div class="result__btns">
        <a class="result__btn result__btn-share" href="#">Поділитись</a>
        <button class="result__btn result__btn-register">
          зАРЕЄСТРУВАТИСЬ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.result {
  height: 100vh;
  background: url("../assets/images/result_bg.png") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  &__content {
    max-width: 670px;
    width: 100%;
  }
  &__refresh {
    display: block;
    width: 80px;
    margin: 0 auto 15px;
  }
  &__text {
    font-size: 18px;
    line-height: 21px;
    &-paragraf {
      margin-bottom: 25px;
      padding: 0 10px;
      &:nth-child(5) {
        margin-bottom: 35px;
      }
    }
  }
  &__again {
    margin-bottom: 35px;
  }
  &__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  &__btns {
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    display: block;
    max-width: 320px;
    width: 100%;
    height: 48px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 21px;
    &-share {
      background: #1877f2;
      position: relative;
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
    &-register {
      color: #fff;
      background: #3e8e4a;
      text-transform: uppercase;
    }
  }
}
</style>
