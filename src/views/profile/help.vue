<template>
  <div class="home">
    <HelloWorld msg="Yardım " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileHelp",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
