<template>
  <div class="app">
    <MasterHeader class="ic" />
    <router-view />
    <b-container class="bannertop">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        background="#ababab"
        img-width="600"
        img-height="405"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          img-src="https://otocarrental.com/clio-rent-a-car.webp"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
        >
        </b-carousel-slide>
      </b-carousel>
      <div class="container-12">
        <div class="grid-12">
          <div class="auction-table-wrap">
            <div class="auction-table">
              <b-row class="pb10">
                <b-col md="7" class="vehicle-info p0">
                  <h2>
                    AUDI A4 1.4 TFSI 150 HP DESIGN STRONIC
                  </h2>
                  <p>
                    2017 · 66.086 Km · 34RN4179 · 128816-6767 ·

                    <span class="break"></span>
                    <span class="tag">BENZIN</span>
                    <span class="tag">OTOMATIK</span>
                    <span class="break" id="linkappend"></span>
                    <br />
                    <a
                      href="javascript:;"
                      data-carid="128816"
                      data-auctionid="6767"
                      data-favoriteid="0"
                      data-favoritename=""
                      data-cardetail="/ihaledeki-ikinci-el-arabalar-ve-fiyatlari/audi-a4-2017/128816-6767"
                      class="follow-link"
                    >
                      <b-icon-plus-circle></b-icon-plus-circle> Favorilere
                      Ekle</a
                    >
                  </p>
                </b-col>
                <b-col md="5" class="increment-info righttext mt30">
                  <div class="info-wrap">
                    <div class="all-prices">
                      <div class="price">
                        <span>1.000</span>
                        ₺ / AÇILIŞ FİYATI
                      </div>

                      <div class="price no-border">
                        <span>276.000</span>
                        ₺ / SON TEKLİF
                      </div>
                    </div>

                    <div class="countdownarea">
                      <vac :left-time="172800000" class="ort">
                        <template v-slot:process="{ timeObj }">
                          <span>{{
                            ` ${timeObj.d} Gün ${timeObj.h} sa ${timeObj.m} dk ${timeObj.s} sn kaldı`
                          }}</span>
                        </template>
                        <template v-slot:finish>
                          <span>Bitti!</span>
                        </template>
                      </vac>
                    </div>

                    <a
                      id="LinkButtonNodeJs"
                      href="#"
                      class="increment-btn increment-btn-link sp-goal-39-63-35-1523463820559"
                      >Teklif Ver</a
                    >
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <img src="@/assets/odemes.png" alt="" />
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </b-container>

    <div>
      <div>
        <b-card no-body class="container m50 mb50">
          <b-tabs card>
            <b-tab title="Ekspertiz Raporu" active>
              <b-card no-body class="borderle">
                <b-tabs card>
                  <b-tab no-body title="Geçmiş Durum" class="center">
                    <p class="mt10">Üst Profil</p>

                    <Caricon />
                  </b-tab>

                  <b-tab no-body class="center" title="Dış">
                    <b-card-img
                      class="dis"
                      bottom
                      src="https://file.ikinciyeni.com/CarPhotos/34RN4179/ExpertiseImage/ikinci-el-satilik-audi-a4-7-72095d.jpg"
                      alt="Image 25"
                    ></b-card-img>
                  </b-tab>

                  <b-tab no-body title="İç" class="center">
                    <b-card-img
                      class="icresim"
                      bottom
                      src="https://file.ikinciyeni.com/CarPhotos/34RN4179/ExpertiseImage/ikinci-el-satilik-audi-a4-26-3836a0.jpg"
                      alt="Image 26"
                    ></b-card-img>
                  </b-tab>

                  <b-tab title="Mekanik">
                    <b-card-title
                      >Buraya <code>Özellikler</code> Geliceks</b-card-title
                    >
                    <b-card-text>
                      Quis magna Lorem anim amet ipsum do mollit sit cillum
                      voluptate ex nulla tempor. Laborum consequat non elit enim
                      exercitation cillum aliqua consequat id aliqua. Esse ex
                      consectetur mollit voluptate est in duis laboris ad sit
                      ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                      Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                      esse irure.
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-tab>
            <b-tab title="Araç Hakkında">
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
    <b-container>
      <b-row class="ihale mb50">
        <b-col md="12" class="p0"
          ><h1>
            İhale Detayı
          </h1></b-col
        >
        <b-col md="12">
          <b-row>
            <b-col md="4">
              <p>Üye23433 - <b-icon-clock></b-icon-clock> 12:50 08/11</p>
            </b-col>
            <b-col md="4">
              <p>Otomatik Teklif (200TL Arttırdı)</p>
            </b-col>
            <b-col md="4">
              <p class="ihaleprice">122.800 ₺</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <p>Üye23433 - <b-icon-clock></b-icon-clock> 12:50 08/11</p>
            </b-col>
            <b-col md="4">
              <p>Otomatik Teklif (200TL Arttırdı)</p>
            </b-col>
            <b-col md="4">
              <p class="ihaleprice">122.800 ₺</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <p>Üye23433 - <b-icon-clock></b-icon-clock> 12:50 08/11</p>
            </b-col>
            <b-col md="4">
              <p>Otomatik Teklif (200TL Arttırdı)</p>
            </b-col>
            <b-col md="4">
              <p class="ihaleprice">122.800 ₺</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <p>Üye23433 - <b-icon-clock></b-icon-clock> 12:50 08/11</p>
            </b-col>
            <b-col md="4">
              <p>Otomatik Teklif (200TL Arttırdı)</p>
            </b-col>
            <b-col md="4">
              <p class="ihaleprice">122.800 ₺</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <p>Üye23433 - <b-icon-clock></b-icon-clock> 12:50 08/11</p>
            </b-col>
            <b-col md="4">
              <p>Otomatik Teklif (200TL Arttırdı)</p>
            </b-col>
            <b-col md="4">
              <p class="ihaleprice">122.800 ₺</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <MasterFooter />
  </div>
</template>

<script>
import MasterHeader from "@/components/Header";
import MasterFooter from "@/components/Footer";
import Caricon from "@/icons/caricon.svg";

export default {
  name: "App",
  components: {
    Caricon,
    MasterHeader,
    MasterFooter
  }
};
</script>

<style lang="scss">
.ihaleprice {
  font-size: 18px;
  text-align: center;
}
.ihale .col-md-4 {
  margin: auto;
  padding: 0;
}
.ihale p {
  margin: 0;
}
.ihale .row {
  background: #f0f0f0;
  padding: 10px;
}
.ihale .row:hover {
  background: #e1b98b;
}
.pb10 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.borderle .nav-item {
  border: 1px solid #d5d5d5;
}
.price {
  font-size: 22px;
  color: #ffad5a;
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
  margin-top: 30px;padding-left: 15px!important; 
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
.bannertop {
  position: relative;
  top: 186px;
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
