<template>
  <div class="home">
    <HelloWorld msg="Şifremi Değiştir " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfilePassword",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
