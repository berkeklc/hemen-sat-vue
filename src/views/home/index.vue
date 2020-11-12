<template>
  <div class="home">
    <img class="banner" alt="banner" src="@/assets/bannerr.png" />
    <OrangeBg width="1920" class="orangebg" />
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
              >Ara <b-icon-check2 style="    color: orange;"></b-icon-check2
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
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
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
      this.form.yil = "";
      this.form.model = "";
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
  border: 00px solid #3d3d3d;
  border-bottom: 0;
  /* margin-left: -15px; */
  padding: 10px 45px;
  border-bottom: 3px solid white;
  position: relative;
  top: 9px;
  left: -14px;
}
.clear {
  background: white;
  color: black;
  border: 00px solid #3d3d3d;
  border-bottom: 0;
  /* margin-left: -15px; */
  padding: 10px 45px;
  border-bottom: 3px solid white;
  position: relative;
  top: 10px;
  left: -15px;
  border-radius: 0;
  border-top-right-radius: 25px;
}
.bgform {
  background: white;
  padding: 15px;
  border-radius: 13px;
  border: 0px solid rgb(0 0 0 / 76%);
}
.tops {
  position: relative;
  top: -230px;
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
