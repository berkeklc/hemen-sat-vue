<template>
  <div class="home">
    <img class="banner" alt="banner" src="@/assets/bannerr.png" />
    <OrangeBg width="1920" class="orangebg" />
    <HelloWorld msg="Hemen Sat " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import OrangeBg from "@/icons/orangebg.svg";
export default {
  name: "Home",
  components: {
    HelloWorld,
    OrangeBg
  }
};
</script>

<style scoped>
.banner {
  height: 100vh;
  width: 100%;
}
.orangebg {
  position: var(--absolute);
  right: 0;
  height:100vh;
}
.button-m {
  background: rgb(var(--buton-orange));
  color: rgb(var(--button-color));
}
</style>
