<template>
  <header class="header">
    <b-row class="">
      <b-col cols="8" md="6" class="logoarea">
        <router-link to="/">
          <Iconlogo class="logo" />
        </router-link>
      </b-col>
    </b-row>
    <div class="menu">
      <form class="searchform" action="">
        <input type="text" placeholder="Marka model ara " />
        <Search class="searchicon" />
      </form>
    </div>
    <div class="memberside">
      <router-link to="/login" style="margin-right: 15px;"
        >Oturum Aç</router-link
      >
      <router-link class="register" to="/login" style="margin-left: 15px;"
        >Kaydol</router-link
      >
      <router-link
        class="detail"
        to="/cardetail"
        style="margin-left: 15px;color:white;"
        >Açık Artırma</router-link
      >
    </div>
    <Slide :closeOnNavigation="true">
      <a id="home" href="#">
        <span>Anasayfa</span>
      </a>
    </Slide>
  </header>
</template>

<script>
import Iconlogo from "@/icons/logoyan.svg";
import Search from "@/icons/search.svg";
import { Slide } from "vue-burger-menu";

export default {
  name: "MainHeader",
  components: {
    Iconlogo,
    Slide,
    Search
  }
};
</script>

<style scoped>
body > div > header > div.row > div.menuarea.col-md-3 > svg > path {
  stroke: white;
}

.detail {
  margin-left: 15px;
  background: transparent;
  padding: 12px 39px;
  background: #ffad5a;
  border-radius: 46px;
}
.register {
  margin-left: 15px;
  background: transparent;
  border: 2px solid #ffad5a;
  padding: 12px 39px;
  border-radius: 46px;
}
.menuarea {
  height: 80px;
  border-left: 1px solid #ffad5a;
  margin-top: 20px;
}
.hamburger {
  position: relative;
  top: 29px;
}
.menu a {
  text-decoration: none;
}
.menu a:hover {
  text-decoration: none;
  color: white;
}
.menu {
  font-family: poppins;
}
.memberside a {
  text-decoration: none;
}
.memberside a:hover {
  text-decoration: none;
  color: white;
}
.memberside {
  font-family: poppins;
}
.searchicon {
  position: relative;
  left: -50px;
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
  width: 220px;
  font-size: 16px;
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
