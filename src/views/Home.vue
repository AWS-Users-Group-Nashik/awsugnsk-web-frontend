<template>
  <div>
    <h2 class="page-heading">Home</h2>
    <Story v-for="story in stories" :key="story.id" v-bind="story" />
  </div>
</template>

<script>
import Story from "@/components/Story.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Home",
  components: { Story },
  data() {
    return {
      stories: [],
    };
  },
  created() {
    ApiService.get("/stories/").then((response) => {
      this.stories = response.data;
    });
  },
};
</script>

<style>
</style>