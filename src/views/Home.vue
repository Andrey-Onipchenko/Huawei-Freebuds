<template>
  <div>
    <Main />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Description from "@/components/Description.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Main,
    Description,
    Footer,
  },
};
</script>
