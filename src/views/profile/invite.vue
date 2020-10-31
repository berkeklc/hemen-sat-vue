<template>
  <div class="home">
    <HelloWorld msg="Arkadaşları davet et " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileInvite",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
