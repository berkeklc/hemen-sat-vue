<template>
  <div class="home">
    <img class="banner" alt="banner" src="@/assets/bannerr.png" />
    <OrangeBg width="1920" class="orangebg" />
    <Container>
      <div>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <HelloWorld msg="Hemen Sat " />
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import OrangeBg from "@/icons/orangebg.svg";
import Container from "@/components/Container";
export default {
  name: "Home",
  components: {
    Container,
    HelloWorld,
    OrangeBg
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
