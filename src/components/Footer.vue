<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__text">
          © 2009-2021 КЕПРЕЙТ ПАРТНЕРС. Всі права захищено.
        </div>
        <div class="footer__social">
          <a href="https://www.instagram.com/vgorode.ua/?hl=ru" target="_blank">
            <img
              class="footer__instagram"
              src="../assets/images/instagram.svg"
              alt="instagram"
          /></a>
          <a href="https://www.facebook.com/vgorode" target="_blank">
            <img src="../assets/images/fb.svg" alt="facebook"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background: #000;
  height: 100px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 600px) {
    padding: 30px 0;
    height: auto;
  }
  &__wrap {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }
  &__text {
    @media (max-width: 600px) {
      text-align: center;
      max-width: 220px;
    }
  }
  &__social {
    @media (max-width: 600px) {
      margin-bottom: 12px;
    }
  }
  &__instagram {
    margin-right: 20px;
  }
}
</style>
