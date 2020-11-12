<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col md="12" class="center">
          <Footerlogo class="" />
        </b-col>
        <b-col md="12" class="center footermenu">
          <router-link to="/login">Otomobiller </router-link> |
          <router-link to="/login">Nasıl Çalışır? </router-link> |
          <router-link to="/login">Kolay Satış Süreci </router-link> |
          <router-link to="/login">Markalar </router-link> |
          <router-link to="/login">Lojistik / Teslimat </router-link> |
          <router-link to="/login">Ekspertiz Süreci </router-link> |
          <router-link to="/login">İade Koşulları </router-link> |
          <router-link to="/login">Kolay Satış Sistemi </router-link> |
          <router-link to="/login">Blog </router-link> |
          <router-link to="/login">Ekspertiz ve Değerleme </router-link> |
          <router-link to="/login">Kurumsal Satış </router-link> |
          <router-link to="/login">Satış Sonrası </router-link> |
          <router-link to="/login">İşlem Rehberi </router-link> |
          <router-link to="/login">İş Birlikleri </router-link> |
          <router-link to="/login">Şubelerimiz </router-link> |
          <router-link to="/login">İnsan Kaynakları </router-link> |
          <router-link to="/login">Reklam Verin </router-link> |
          <router-link to="/login">İletişim </router-link> |
        </b-col>
        <b-col md="12" class="center social">
          <b-icon-envelope style="  position: relative;    top: 3px;"></b-icon-envelope>
          <facebook-icon size="1.5x" class="custom-class"></facebook-icon>
          <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
          <you-tube-icon size="1.5x" class="custom-class"></you-tube-icon>
          <instagram-icon size="1.5x" class="custom-class"></instagram-icon>
          <linked-in-icon size="1.5x" class="custom-class"></linked-in-icon>
        </b-col>
        <b-col md="12" class="center platform">
          <img class="mr15" alt="banner" src="@/assets/appstore.png" />
          <img alt="banner" src="@/assets/googleplay.png" />
        </b-col>
        <b-col md="12" class="kvkk center">
          <router-link to="/login">Çerez Aydınlatma Politikası </router-link>
          <router-link to="/login">Kullanım Koşulları </router-link>
          <router-link to="/login">Aydınlatma Metni </router-link>
          <router-link to="/login">KVK Politikası </router-link>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import Footerlogo from "@/icons/logo.svg";
import {
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon
} from "vue-brand-icons";

export default {
  name: "Footer",
  components: {
    Footerlogo,
    FacebookIcon,
    TwitterIcon,
    YouTubeIcon,
    InstagramIcon,
    LinkedInIcon
  }
};
</script>

<style scoped>
.social svg:first-child{font-size:18px;}
.social svg {
  fill: #ffa358;
  margin-right: 15px;
  font-size: 14px;
}
.platform {
  margin: 15px 0;
}
.social {
  margin: 15px 0;
}
.kvkk {
  margin: 15px 0;
}
.kvkk a {
  margin-right: 25px;
}
.mr15 {
  margin-right: 10px;
}
.footermenu a {
  font-size: 14px;
  padding: 0 7px;
}
.footermenu {
  line-height: 36px;
  margin-top: 26px;
  margin-bottom: 10px;
}
.footer {
  border-top: 1px solid #ccc;
  margin-top: 50px;
  padding-top: 30px;
}
.center {
  text-align: center;
}
</style>
