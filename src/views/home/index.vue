<template>
  <div class="home">
    <b-container fluid class="p0 bgry">
      <b-col md="8" cols="12" class="area"></b-col>
      <b-col md="4" class="poz">
        <h1 class="slogan">Hikayeni yaşa</h1>
        <Slogan />
      </b-col>

      <img class="tesla" alt="banner" src="@/assets/tesla.png" />
    </b-container>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-container class="tops ">
          <b-button type="reset" class="clear" variant="danger"
            >Temizle
            <b-icon-circle
              style="color: orange;    margin-left: 20px;"
            ></b-icon-circle
          ></b-button>

          <b-row class="bgform">
            <b-col md="4">
              <b-form-group
                id="input-group-1"
                label="Araç Marka"
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  v-model="form.marka"
                  :options="marka"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                id="input-group-2"
                label="Araç Model"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="form.model"
                  :options="model"
                  required
                >
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="3">
              <b-form-group
                id="input-group-3"
                label="Araç Yıl"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="form.yil"
                  :options="yil"
                  required
                ></b-form-select> </b-form-group
            ></b-col>
            <b-button type="submit" variant="primary"
              >Ara
              <b-icon-check2
                style="       font-size: 21px; color: orange;"
              ></b-icon-check2
            ></b-button>
          </b-row>
        </b-container>
      </b-form>
    </div>
    <b-container class="bv-example-row">
      <div>
        <h1 style="    margin-bottom: 20px;">Vitrin</h1>
      </div>
      <b-row class="vitrincard">
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
          </router-link>
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
            </b-card></router-link
          >
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
            </b-card></router-link
          >
        </b-col>
      </b-row>
      <div>
        <h1 class="mt-5" style="    margin-bottom: 20px;">Geçmiş Satışlar</h1>
      </div>
      <b-row class="vitrincard">
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
            </b-card></router-link
          >
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
            </b-card></router-link
          >
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/cardetail">
            <b-card
              no-body
              img-top
              img-src="https://www.rentacar34.com/wp-content/uploads/2016/12/jetta.png"
            >
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
            </b-card></router-link
          >
        </b-col>
      </b-row>
    </b-container>
    <MasterFooter style="margin-top:50px;" />
  </div>
</template>

<script>
// @ is an alias to /src
import FavIcon from "@/icons/fav.svg";
import Slogan from "@/icons/slogan.svg";
import ShareIcon from "@/icons/share.svg";
import MasterFooter from "@/components/Footer";

export default {
  name: "Home",
  components: {
    MasterFooter,
    FavIcon,
    Slogan,
    ShareIcon
  },
  data() {
    return {
      form: {
        marka: null,
        model: null,
        yil: null,
        checked: []
      },
      marka: [
        { text: "Marka", value: null },
        "BMW",
        "Dacia",
        "Audi",
        "Bentley"
      ],
      model: [{ text: "Model", value: null }, "a1", "a3", "a4", "a5"],
      yil: [{ text: "Yıl", value: null }, "2000", "2001", "2002", "2003"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.yil = null;
      this.form.model = null;
      this.form.marka = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.custom-select {
  border: 0;
  border-right: 1px solid #ccc;
}
.d-block {
  display: block !important;
  font-size: 12px;
}
.poz {
  position: absolute;
  top: 370px;
  z-index: 9;
  color: white;
  text-align: left;
  left: 130px;
  font-weight: unset;
}
.slogan {
  font-weight: 300;
  font-size: 58px;
}

.bgry {
  background: #e3dedb78;
  height: 100vh;
  overflow: hidden;
}
.p0 {
  padding: 0;
}
.area {
  background: #f9a867;
  flex: 0 0 65%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: translate(0%);
  height: 150vh;
  position: relative;
  top: -170px;
  z-index: 1;
  transition: 0.3s all cubic-bezier(0.58, 0.2, 0.39, 0.96);
}
a:hover {
  text-decoration: none;
}
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.btn-primary {
  color: black;
  background: transparent;
  border: 0;
}
.btn-primary:hover {
  color: black;
  background: transparent;
  border: 0;
}
.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:hover,
.show > .btn-danger.dropdown-toggle {
  background: white;
  color: black;
  border: 8px solid rgb(0 0 0 / 64%);
  /* margin-left: -15px; */
  padding: 10px 45px;
  border-bottom: 0px solid white;
  position: relative;
  top: 8px;
  left: -15px;
  z-index: 99999;
}
.clear {
  background: white;
  color: black;
  border: 8px solid rgb(0 0 0 / 64%);
  /* margin-left: -15px; */
  padding: 10px 45px;
  border-bottom: 0px solid white;
  position: relative;
  top: 8px;
  left: -15px;
  z-index: 99999;
}
.bgform {
  background: white;
  padding: 15px;
  border-radius: 13px;
  border: 8px solid rgb(0 0 0 / 64%);
  z-index: 999;
  position: relative;
  border-top: 1;
  border-radius: 0;
}
.tops {
  position: relative;
  top: -200px;
}
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
