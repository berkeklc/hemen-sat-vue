<template>
  <div class="home">
    <HelloWorld msg="İhalelerim " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileTender",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
