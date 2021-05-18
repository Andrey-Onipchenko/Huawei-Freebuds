<template>
  <div class="footer">
    <div class="container">
      <div class="footer__wrap">
        <div class="fotter__text">
          © 2009-2021 КЕПРЕЙТ ПАРТНЕРС. Всі права захищено.
        </div>
        <div class="footer__social">
          <a href="https://www.instagram.com/?hl=ru" target="_blank">
            <img
              class="footer__instagram"
              src="../assets/images/instagram.svg"
              alt="instagram"
          /></a>
          <a href="https://www.facebook.com/" target="_blank">
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
  &__wrap {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__instagram {
    margin-right: 20px;
  }
}
</style>
