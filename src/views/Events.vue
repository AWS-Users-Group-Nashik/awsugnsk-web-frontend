<template>
  <div>
    <h2 class="page-heading">Events</h2>
    <div class="container">
      <vs-row>
        <vs-col lg="4" sm="6" xs="12" v-for="event in events" :key="event.id">
          <Event v-bind="event" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import Event from "@/components/Event.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Events",
  components: { Event },
  data() {
    return {
      events: [],
      windowWidth: null,
    };
  },
  created() {
    ApiService.get("/events/").then((response) => {
      this.events = response.data;
    });
  },
};
</script>

<style scoped></style>
