<template>
  <div>
    <h2 class="page-heading page-heading-title">Events</h2>
    <div class="container">
      <vs-row>
        <vs-col lg="4" sm="6" xs="12" v-for="event in events" :key="event.id">
          <Event v-bind="event" />
        </vs-col>
      </vs-row>
      <div v-if="!events.length && isResponseReceived">
        <NoItems :title="'events'" />
      </div>
    </div>
  </div>
</template>

<script>
import Event from "@/components/Event.vue";
import NoItems from "@/components/NoItems.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Events",
  components: { Event, NoItems },
  data() {
    return {
      events: [],
      windowWidth: null,
      isResponseReceived: false,
    };
  },
  created() {
    const loading = this.$vs.loading({ type: "circles", color: "#ffc074" });
    ApiService.get("/events/").then((response) => {
      this.events = response.data;
      this.isResponseReceived = true;
      loading.close();
    });
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
