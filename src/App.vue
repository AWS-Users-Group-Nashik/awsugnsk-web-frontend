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
  margin-top: 100px;
  margin-left: 15vw;
  font-size: 50px;
  text-decoration: #ffc074 solid overline;
}

::-webkit-scrollbar {
  width: 0;
}

@media screen and (max-width: 768px) {
  .page-heading {
    margin-left: 5vw;
  }
}
</style>