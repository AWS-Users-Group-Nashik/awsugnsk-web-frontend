<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: url(assets/fonts/Avenir/Avenir-Book.ttf) format("truetype");
}

* {
  font-family: "Avenir";
}

.page-heading {
  margin-left: 15vw;
  font-size: 50px;
  text-decoration: #FFC074 solid overline;
}

@media screen and (max-width: 768px) {
  .page-heading {
    margin-left: 5vw;
  }
}
</style>