<template>
  <div class="home">
    <HelloWorld msg="İletişim tercihleri " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileContact",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
