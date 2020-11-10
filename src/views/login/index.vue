<template>
  <div class="app">
    <MasterHeader class="ic" />
    <b-container class="center bannertop2">
      <Logotek />
      <h2>Oturum aç</h2>
      <p>Otomobiliniz ikinci el satış için ederini öğrenmek ister misiniz?</p>
      <b-col>
        <b-form-input
          id="input-default"
          class="inputsty"
          placeholder="Sisteme Kayıtlı E-Posta"
        ></b-form-input>
      </b-col>
      <b-col>
        <b-form-input
          id="input-default"
          class="inputsty"
          placeholder="Parola"
        ></b-form-input>
      </b-col>
      <b-row>
        <b-col md="6">
          <b-form-checkbox name="check-button" switch>
            Beni Hatırla</b-form-checkbox
          >
        </b-col>
        <b-col md="6">
          <router-link
            class="register"
            to="/register"
            style="margin-left: 15px;"
            >Şifremi Unuttum</router-link
          >
        </b-col>
      </b-row>
      <Login />

      <p class="mt30">
        Henüz üye değilseniz
        <router-link to="/register" class="regster">ÜYE OL!</router-link>
      </p>
    </b-container>

    <MasterFooter />
  </div>
</template>

<script>
import MasterHeader from "@/components/Header";
import MasterFooter from "@/components/Footer";
import Logotek from "@/icons/logotek.svg";
import Login from "@/icons/login.svg";
export default {
  name: "App",
  components: {
    MasterHeader,
    Logotek,
    Login,
    MasterFooter
  }
};
</script>

<style lang="scss">
.custom-switch .custom-control-label::after {
  background-color: #ffaa59;
}
.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #ff8d52;
  background-color: #ff9053;
}
.regster {
  text-decoration: underline;
  color: orange;
}
.inputsty {
  width: 63%;
  margin: auto;
  border: 2px solid #ffad5a;
  margin-bottom: 15px;
  border-radius: 25px;
  padding: 25px 15px;
}
.pb10 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.borderle .nav-item {
  border: 1px solid #d5d5d5;
}
.mt30 {
  margin-top: 30px;
}
.righttext {
  text-align: right;
}
.tag {
  border: 1px solid #ccc;
  color: #a1a1a1;
  font-size: 12px;
  padding: 4px 9px;
  border-radius: 25px;
  margin-right: 5px;
}
.vehicle-info {
  margin-top: 30px;
}
.p0 {
  padding: 0;
}
.memberside .register:hover {
  text-decoration: none;
  color: white !important;
  background: #ffad5a;
}
.memberside a[data-v-61dd7a3d]:hover {
  text-decoration: none;
  color: #ffad5a;
}
.m50 {
  margin-top: 200px;
}
.mb50 {
  margin-bottom: 50px;
}
.bannertop2 {
  position: relative;
  top: 168px;
  margin-bottom: 220px;
}
.mt10 {
  margin-top: 30px;
}
#__BVID__23__BV_tab_controls_ > li:nth-child(1) {
  border: 1px solid #ccc;
  border-radius: 27px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#__BVID__23__BV_tab_controls_ > li:nth-child(2) {
  border: 1px solid #ccc;
  border-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
  padding: 0 10px;
}
#__BVID__23__BV_tab_controls_ > li:nth-child(3) {
  border: 1px solid #ccc;
  border-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#__BVID__23__BV_tab_controls_ > li:nth-child(4) {
  border: 1px solid #ccc;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
* {
  font-family: poppins;
}
#__BVID__21___BV_tab_button__ {
  font-size: 14px;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #ffb05b;
  border: none;
  background-color: transparent;
  font-size: 16px;
  border-color: #dee2e6 #dee2e6 #fff;
}
.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 0px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  background: #f0f0f0;
}
.tab-pane {
  background: #f0f0f0;
  padding-bottom: 50px;
}
.card {
  background: #f0f0f0;
}
.card-header {
  text-align: center;
  background: transparent;
  border: none;
  border-top: none;
  border: none;
}
#__BVID__20__BV_tab_controls_ {
  display: -webkit-inline-box;
  border: 1px solid #ccc;
  border-radius: 25px;
}
.card-header-tabs {
  display: -webkit-inline-box;
}
.center {
  text-align: Center;
}
.dis {
  width: 500px;
  height: 375px;
}
.icresim {
  width: 500px;
  height: 375px;
}
body > div > div > header > div.row > div.logoarea.col-md-6 > a > svg > text {
  font-size: 48px;
}
body
  > div
  > div
  > header
  > div.row
  > div.logoarea.col-md-6
  > a
  > svg
  > text
  > tspan {
  color: orange;
  fill: #ffad5a;
  stroke: orange;
}
body > div > div > header > div.row > div.menuarea.col-md-3 > svg > path {
  fill: #ffad5a;
}
.header {
  box-shadow: 1px 1px 20px #00000014;
}
.ic {
  background: #fff;
  color: #ffad5a;
}
.ic .memberside {
  color: #ffad5a;
}
.ic .detail {
  color: #fff;
}
.ic .searchform input[data-v-61dd7a3d] {
  background: transparent;
  border: 2px solid #ffad5a;
  outline: 0;
  color: #ffad5a;
  padding: 14px 15px;
  border-radius: 20px;
  width: 290px;
  font-size: 16px;
}
.ic .searchform ::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffad5a;
  opacity: 1; /* Firefox */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
