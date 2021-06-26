<template>
  <div class="footer-wrapper">
    <vs-row>
      <vs-col lg="4" sm="12" type="flex" justify="center">
        <vs-button icon circle color="#ffc074">
          <i class="bx bxl-twitter bx-sm"></i>
        </vs-button>
        <vs-button icon circle color="#ffc074">
          <i class="bx bxl-linkedin-square bx-sm"></i>
        </vs-button>
        <vs-button icon circle color="#ffc074">
          <i class="bx bxl-whatsapp bx-sm"></i>
        </vs-button>
        <vs-button icon circle color="#ffc074">
          <i class="bx bxl-telegram bx-sm"></i>
        </vs-button>
        <vs-button icon circle color="#ffc074">
          <i class="bx bxl-discord bx-sm"></i>
        </vs-button>
      </vs-col>
      <vs-col lg="4" sm="12" type="flex" justify="center" class="email-wrapper">
        <a href="mailto:awsugnsk@gmail.com" class="email-text"
          >Email: awsugnsk@gmail.com</a
        >
      </vs-col>
      <vs-col
        lg="4"
        sm="12"
        type="flex"
        justify="center"
        class="made-by-wrapper"
      >
        <router-link :to="'/about'" class="made-by-text">
          Made with 🖤 by AWSUGNSK</router-link
        >
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-wrapper {
  margin-top: 50px;
  display: grid;
  place-items: center;
  color: white;
  font-weight: bold;
  background: #ffc074;
  border-radius: 20px 20px 0px 0px;
}

.email-wrapper,
.made-by-wrapper {
  align-self: center;
}

.email-text,
.made-by-text {
  text-decoration: none;
  color: white;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .email-wrapper,
  .made-by-wrapper {
    margin: 10px 0px;
  }
}
</style>