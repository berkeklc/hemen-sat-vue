<template>
  <div class="home">
    <img class="banner" alt="banner" src="@/assets/bannerr.png" />
    <OrangeBg width="1920" class="orangebg" />
    <b-container class="bv-example-row">
      <div>
        <h1 class="mt-5" style="    margin-bottom: 20px;">Vitrin</h1>
      </div>
      <b-row class="vitrincard">
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row>
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col>
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row>
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col>
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row>
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col>
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <div>
        <h1 class="mt-5" style="    margin-bottom: 20px;">Geçmiş Satışlar</h1>
      </div>
      <b-row class="vitrincard">
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row>
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col>
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row> 
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col> 
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <b-card no-body img-top img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png">
            <b-row class="favarea">
              <b-col md="2"> <FavIcon /></b-col>
              <b-col md="2"> <ShareIcon /></b-col>
            </b-row>
            <b-card-body>
              <b-row>
                <b-col md="6" no-gutters="true">
                  <h1 class="cartitle">SEAT LEON 1.6</h1>
                  <p class="carmodal">TDI 115 HP STYLE SS DSG</p>
                </b-col>
                <b-col md="6" no-gutters="true" class="righttext">
                  <h3 class="caroffer">Son Verilen Teklif</h3>
                  <p class="price">100.000 ₺</p>
                </b-col>
              </b-row>
              <b-col md="12" class="options">
                <p>2017 - 80.555 KM - 34 DCD 54</p>
              </b-col>
              <b-col md="12" class="options">
                <span>Benzin</span>
                <span>Otomatik</span>
              </b-col>
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
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
     <MasterFooter style="margin-top:50px;" />
  </div>
</template>

<script>
// @ is an alias to /src
import OrangeBg from "@/icons/orangebg.svg";
import FavIcon from "@/icons/fav.svg";
import ShareIcon from "@/icons/share.svg";
import MasterFooter from "@/components/Footer";

export default { 
  name: "Home",
  components: {
    MasterFooter,
    OrangeBg,
    FavIcon,
    ShareIcon
  }
};
</script>

<style scoped>
.ort span {
  font-family: poppins;
  font-size: 16px;
  font-weight: 600;
}
.options {
  text-align: center;
}
.options span {
  border: 1px solid#787d83;
  padding: 1px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: #787d83;
  margin: 3px;
}
.options p {
  text-align: Center;
  padding: 1px 10px;
  border-radius: 10px;
  font-size: 14px;
  color: #787d83;
}
.ort {
  text-align: center;
  width: 100%;
  align-items: center;
  vertical-align: middle;
  float: right;
  margin: 10px 0;
}
.righttext {
  text-align: right;
}
.price {
  font-size: 24px;
}
.caroffer {
  margin-bottom: 0;
  font-size: 16px;
  color: rgb(var(--offer-color));
}
.carmodal {
  font-size: 12px;
}
.vitrincard .card-body {
  padding: 0 13px;
  margin-top: -20px;
}
.cartitle {
  font-size: 16px;
}
.favarea {
  position: relative;
  top: -24px;
  left: 9px;
}
.banner {
  height: 100vh;
  width: 100%;
}
.orangebg {
  position: var(--absolute);
  right: 0;
  height: 100vh;
}
.button-m {
  background: rgb(var(--buton-orange));
  color: rgb(var(--button-color));
}
</style>
