<template>
  <div class="main">
    <div class="container container_small">
      <img class="logo" src="../assets/images/logo.png" alt="logo" />
      <h4 class="main__test">тест</h4>
      <h1 class="title">Як звучить Україна</h1>
      <h2 class="subtitle">
        З <span class="text-red">Huawei</span> Freebuds 4i
      </h2>
      <p class="main__text">
        Кожне місто в Україні по-своєму унікальне та особливе. А також кожне із
        них винятково звучить.
      </p>
      <p class="main__text">
        Давай разом з Huawei Freebuds 4i перевіримо, наскільки добре ти
        розбираєшся у звучанні різних міст України.
      </p>
      <a class="main__link" href="#">Перевірити себе</a>
    </div>
    <div class="steap">
      <div class="steap__item">
        <h4 class="steap__title">крок 1</h4>
        <p class="steap__text">
          Прослухай фрагмент звукового запису, спробуй здогадатись яке це місто,
          та обери свій варіант із списку.
        </p>
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
          Бери участь у розіграші навушників Huawei Freebuds 4i.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  margin: 40px 0 46px;
}
.main {
  width: calc(100vw - 17px);
  height: 680px;
  background: url("../assets/images/main_bg.png") center no-repeat;
  background-size: cover;
  position: relative;
  &__test {
    font-family: "Huawei Bold", sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #8d8d8d;
    text-shadow: 0px 6px 9px rgba(0, 0, 0, 0.36);
  }
  &__text {
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    margin-bottom: 15px;
    max-width: 515px;
    &:nth-last-child(2) {
      margin-bottom: 30px;
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
    &::after {
      content: "";
      position: absolute;
      background: url("../assets/images/link_test.png") center no-repeat;
      //   background-size: contain;
      width: 69px;
      height: 77px;
      right: 10px;
      top: -15px;
    }
  }
}
.steap {
  position: absolute;
  width: 1500px;
  height: 220px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -150px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__item {
    height: 135px;
    max-width: 260px;
    text-align: center;
    font-family: "Huawei Bold", sans-serif;
  }
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    color: #a41621;
    margin-bottom: 14px;
  }
  &__text {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
