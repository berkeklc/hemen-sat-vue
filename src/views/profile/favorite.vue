<template>
  <div class="home">
    <HelloWorld msg="Favorilerim " />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ProfileFavorite",
  components: {
    HelloWorld
  }
};
</script>

<style scoped></style>
