<template>
  <div>
    <h2 class="page-heading">Events</h2>
    <Event v-for="index in 5" :key="index" :id="index" />
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
    };
  },
  created() {
    ApiService.get("/events/").then((response) => {
      this.events = response.data;
    });
  },
};
</script>

<style>
</style>