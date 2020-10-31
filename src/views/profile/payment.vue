<template>
  <div class="home">
    <HelloWorld msg="Ödeme Yönemlerim " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfilePayment",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
