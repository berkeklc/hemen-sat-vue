<template>
  <div class="home">
    <Iconlogo class="logo" />

    <HelloWorld msg="Hesabım " />

    <div id="nav">
      <router-link to="/profile/edit">Profili Düzenle</router-link> |
      <router-link to="/profile/tender">İhalelerim</router-link> |
      <router-link to="/profile/purchase">Aldıklarım</router-link> |
      <router-link to="/profile/vend">Sattıklarım</router-link> |
      <router-link to="/profile/offer">Mevcut tekliflerim</router-link> |
      <router-link to="/profile/favorite">Favorilerim</router-link> |
      <router-link to="/profile/payment">Ödeme Yöntemlerim</router-link> |
      <router-link to="/profile/password">Şifremi Değiştir</router-link> |
      <router-link to="/profile/contact">İletişim Tercihleri</router-link> |
      <router-link to="/profile/help">Yardım</router-link> |
      <router-link to="/profile/invite">Arkadaşları davet et</router-link> |
      <router-link to="/elements">Çıkış yap</router-link> |
    </div>

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Iconlogo from "@/icons/logo.svg";

export default {
  name: "Profile",
  components: {
    HelloWorld,
    Iconlogo
  }
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
