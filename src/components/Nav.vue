  <template>
  <div class="right nav-wrapper">
    <vs-navbar>
      <template #left>
        <img class="nav-logo" src="../assets/images/awsLogo.png" />
      </template>
      <template>
        <vs-navbar-item
          :active="active == 'stories'"
          id="stories"
          :to="'/'"
          @click="updateActive('stories')"
        >
          Stories
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'events'"
          id="events"
          :to="'/events'"
          @click="updateActive('events')"
        >
          Events
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'learnings'"
          id="learnings"
          :to="'/learning-paths'"
          @click="updateActive('learnings')"
        >
          Learnings
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'about'"
          id="about"
          :to="'/about'"
          @click="updateActive('about')"
        >
          About
        </vs-navbar-item>
      </template>
      <template #right>
        <vs-button icon circle shadow>
          <a
            href="https://github.com/AWS-Users-Group-Nashik"
            target="_blank"
            class="icon-href"
          >
            <i class="bx bxl-github bx-md"></i>
          </a>
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    active: "stories",
  }),
  methods: {
    updateActive(route) {
      this.active = route;
    },
  },
};
</script>

<style>
.vs-navbar {
  top: 0;
  position: fixed !important;
  background-color: #fff;
  border-radius: 0px 0px 20px 20px;
  color: #171717;
  height: 90px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 15px;
}

.vs-navbar__item {
  font-size: 20px !important;
}

.nav-logo {
  height: 70px;
  width: 70px;
}

.vs-navbar {
  justify-content: space-evenly !important;
}

@media screen and (max-width: 768px) {
  .vs-navbar__item {
    font-size: 13px !important;
  }

  .nav-logo {
    height: 45px;
    width: 45px;
    margin-right: 5px;
  }

  .vs-navbar__item {
    padding: 10px 8px !important;
  }
}
</style>
