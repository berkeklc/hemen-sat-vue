<template>
  <header class="header">
    <div class="logoarea">
      <router-link to="/">
        <Iconlogo class="logo" />
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/about">İhalelere göz at</router-link> |
      <router-link to="/about">İhalelere ver</router-link> |
    </div>
    <div class="memberside">
      <router-link to="/profile">Giriş yap</router-link> |
      <router-link to="/elements">Kayıt ol</router-link>
    </div>
  </header>
</template>

<script>
import Iconlogo from "@/icons/logo.svg";

export default {
  name: "MainHeader",
  components: {
    Iconlogo
  }
};
</script>

<style scoped>
.logoarea {
  float: left;
}
.menu {
  float: left;
}
.memberside {
  position: var(--absolute);
  right: 20px;
}
.menu,
.memberside {
  color: white;
}
.logo {
  height: var(--logo-height);
  margin: var(--margin30);
}
.header {
  position: var(--absolute);
  z-index: 50;
  width: 100%;
}
</style>
