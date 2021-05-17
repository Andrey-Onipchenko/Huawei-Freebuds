<template>
  <div>
    <Main />
    <Description />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Description from "@/components/Description.vue";

export default {
  name: "Home",
  components: {
    Main,
    Description,
  },
};
</script>
