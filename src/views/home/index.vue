<template>
  <div class="home">
    <img class="banner" alt="banner" src="@/assets/bannerr.png" />
    <OrangeBg width="1920" class="orangebg" />
    <b-container class="bv-example-row">
      <div>
        <h1 class="mt-5">Vitrin</h1>
      </div>
      <b-row>
        <b-col cols="12" md="4">
          <h5>Image top</h5>
          <b-card
            no-body
            img-top
            img-src="https://picsum.photos/600/300/?image=25"
          >
            <FavIcon />
            <ShareIcon />
            <b-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nunc sapien, non rhoncus elit tincidunt vitae.
            </b-card-body>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <h5>Image top</h5>
          <b-card
            no-body
            img-top
            img-src="https://picsum.photos/600/300/?image=25"
          >
            <b-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nunc sapien, non rhoncus elit tincidunt vitae.
            </b-card-body>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4">
          <h5>Image top</h5>
          <b-card
            no-body
            img-top
            img-src="https://picsum.photos/600/300/?image=25"
          >
            <b-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nunc sapien, non rhoncus elit tincidunt vitae.
            </b-card-body>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
      <div>
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
          class="mt-5"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import OrangeBg from "@/icons/orangebg.svg";
import FavIcon from "@/icons/fav.svg";
import ShareIcon from "@/icons/share.svg";
export default {
  name: "Home",
  components: {
    OrangeBg,
    FavIcon,
    ShareIcon
  }
};
</script>

<style scoped>
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
