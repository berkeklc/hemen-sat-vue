<template>
  <div class="home">
    <Iconlogo class="logo" />

    <img alt="Vue logo" src="@/assets/bannerr.png" />
    <HelloWorld msg="Hemen Sat " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Iconlogo from "@/icons/logo.svg";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Iconlogo
  }
};
</script>

<style scoped> 
.logo {
  height: var(--logo-height);
  margin-top: 20px;
}
.button-m {
  background: rgb(var(--buton-orange));
  color: rgb(var(--button-color));
}
</style>
