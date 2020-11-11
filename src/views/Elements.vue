<template>
  <div class="elements">
    <h1>Elements</h1>

    <h3>Buttonlar</h3>

    <router-link to="/" class="button-m">
      Yeni ihale Başlat
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Elements",
  components: {},
  
};
</script>

<style scoped>
.logo {
  height: var(--logo-height);
  margin-top: 20px;
}
.button-m {
  background: rgb(var(--buton-orange));
  color: rgb(var(--button-color));
}
</style>
