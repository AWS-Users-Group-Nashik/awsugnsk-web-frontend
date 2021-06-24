<template>
  <div>
    <h2 class="page-heading">Learnings</h2>
    <Learning v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Learning from "@/components/Learning.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Learnings",
  components: { Learning },
  data() {
    return {
      learnings: [],
    };
  },
  created() {
    ApiService.get("/learnings/").then((response) => {
      this.learnings = response.data;
    });
  },
};
</script>

<style>
</style>