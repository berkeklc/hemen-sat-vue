<template>
  <div class="home">
    <HelloWorld msg="Aldıklarım " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfilePurchase",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
