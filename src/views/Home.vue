<template>
  <div>
    <h2 class="page-heading page-heading-title">Stories</h2>
    <div class="container">
      <Story v-for="story in stories" :key="story.id" v-bind="story" />
    </div>
    <div v-if="!stories.length && isResponseReceived">
      <NoItems :title="'stories'" />
    </div>
  </div>
</template>

<script>
import Story from "@/components/Story.vue";
import NoItems from "@/components/NoItems.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Home",
  components: { Story, NoItems },
  data() {
    return {
      stories: [],
      isResponseReceived: false,
    };
  },
  created() {
    const loading = this.$vs.loading({ type: "circles", color: "#ffc074" });
    ApiService.get("/stories/").then((response) => {
      this.stories = response.data;
      if (this.stories.length) {
        this.stories.forEach((story) => {
          story.date = new Date(story.date).toLocaleString(undefined, {
            timeZone: "Asia/Kolkata",
            weekday: "short",
            day: "numeric",
            year: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
          });
        });
      }
      this.isResponseReceived = true;
      loading.close();
    });
  },
};
</script>

<style>
</style>