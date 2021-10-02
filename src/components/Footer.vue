<template>
  <div class="footer-wrapper">
    <vs-row>
      <vs-col lg="4" sm="12" type="flex" justify="center">
        <vs-button icon circle shadow>
          <a
            href="https://www.linkedin.com/company/aws-user-group-nashik"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-linkedin-square bx-sm"></i>
          </a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://twitter.com/awsugnashik"
            target="_blank"
            class="icon-href"
            ><i class="bx bxl-twitter bx-sm"></i
          ></a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://www.facebook.com/awsugnsk/"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-facebook bx-sm"></i>
          </a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://www.youtube.com/channel/UCzxR3NybF1h28v0jFxcB5tw"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-youtube bx-sm" href=""></i>
          </a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://www.instagram.com/awsugnsk/"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-instagram bx-sm"></i>
          </a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://join.slack.com/t/awsusergroupnashik/shared_invite/zt-ryeqij9f-XN7VzVIlt4OcJE~pv3Lt5A"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-slack bx-sm"></i>
          </a>
        </vs-button>
        <vs-button icon circle shadow>
          <a
            href="https://chat.whatsapp.com/FESwePvFLqcDYirZmjcqjX"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-whatsapp bx-sm"></i>
          </a>
        </vs-button>
      </vs-col>
      <vs-col
        lg="4"
        sm="12"
        type="flex"
        justify="center"
        class="supported-by-wrapper"
      >
        <a
          href="https://www.jetbrains.com/"
          target="_blank"
          class="supported-by-text"
        >
          <span style="font-weight: normal; margin-right: 5px"
            >Supported by</span
          >
          Jetbrains
          <img
            class="supported-by-logo"
            src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg"
            alt="JetBrains Logo (Main) logo."
        /></a>
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
  color: #222831;
  font-weight: bold;
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(149, 157, 165, 1) 2px 10px 25px;
}

.supported-by-wrapper,
.made-by-wrapper {
  align-self: center;
}

.supported-by-text,
.made-by-text {
  text-decoration: none;
  color: #222831;
  font-size: 20px;
}

.made-by-text {
  font-size: 15px;
}

.supported-by-text {
  display: flex;
  place-items: center;
}

.supported-by-logo {
  height: 35px;
  margin-left: 5px;
}

.icon-href {
  text-decoration: none;
  color: #222831;
}

@media screen and (max-width: 768px) {
  .supported-by-wrapper,
  .made-by-wrapper {
    margin: 10px 0px;
  }

  .made-by-text {
    font-size: 12px;
  }
}
</style>