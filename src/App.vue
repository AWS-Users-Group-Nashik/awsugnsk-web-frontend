<template>
  <div id="app">
    <Nav />
    <router-view class="main-content"></router-view>
    <Footer class="footer" />
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

html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  height: 100%;
}

.main-content {
  margin: 8px;
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto 0px;
}

.container {
  max-width: 1080px;
  margin: auto;
}

.page-heading {
  max-width: 1080px;
  margin: auto;
  margin-top: 100px;
}

.page-heading-title {
  font-size: 50px;
  text-decoration: #ffc074 solid overline;
}

::-webkit-scrollbar {
  width: 0;
}

.footer {
  height: 60px;
}

@media screen and (max-width: 768px) {
  .page-heading {
    margin-left: 5vw;
  }

  .footer {
    height: 150px;
  }
}
</style>