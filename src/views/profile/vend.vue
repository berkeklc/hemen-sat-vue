<template>
  <div class="home">
    <HelloWorld msg="Sattıklarım " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileVendor",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
