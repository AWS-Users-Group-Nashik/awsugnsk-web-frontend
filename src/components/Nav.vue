  <template>
  <div class="right nav-wrapper">
    <vs-navbar>
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
  background-color: #ffc074;
  border-radius: 0px 0px 20px 20px;
  color: #171717;
}
</style>
