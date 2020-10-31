<template>
  <div class="home">
    <HelloWorld msg="Mevcut Tekliflerim " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileOffer",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
