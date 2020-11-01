<template>
  <header class="header">
    <div class="logoarea">
      <router-link to="/">
        <Iconlogo class="logo" />
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/about" style="margin-right: 15x;"
        >İhalelere göz at</router-link
      >
      |
      <router-link to="/about" style="margin-left: 15px;"
        >İhalelere ver</router-link
      >
      <form class="searchform" action="">
        <input type="text" placeholder="Marka model ara " />
        <Search class="searchicon" />
      </form>
    </div>
    <div class="memberside">
      <router-link to="/profile" style="margin-right: 15px;"
        >Giriş yap</router-link
      >
      |
      <router-link to="/elements" style="margin-left: 15px;"
        >Kayıt ol</router-link
      >
    </div>
  </header>
</template>

<script>
import Iconlogo from "@/icons/logo.svg";
import Search from "@/icons/search.svg";

export default {
  name: "MainHeader",
  components: {
    Iconlogo,
    Search
  }
};
</script>

<style scoped>
.searchicon {
  position: relative;
  top: 13px;
  left: -57px;
}
.searchform {
  display: unset;
  margin-left: 50px;
}
.searchform input {
  background: transparent;
  border: 2px solid white;
  outline: 0;
  color: white;
  padding: 14px 15px;
  border-radius: 20px;
  width: 200px;
}
.searchform ::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

.logoarea {
  float: left;
}
.menu {
  float: left;
  font-size: 18px;
}
.memberside {
  text-align: center;
  font-size: 18px;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
</style>
