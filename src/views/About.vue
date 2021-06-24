<template>
  <div>
    <h2>About</h2>
    <Member v-for="index in 5" :key="index" :id="index" />
  </div>
</template>

<script>
import Member from "@/components/Member.vue";
import ApiService from "@/common/api.service";
export default {
  name: "About",
  components: { Member },
  data() {
    return {
      members: [],
    };
  },
  created() {
    ApiService.get("/members/").then((response) => {
      this.members = response.data;
    });
  },
};
</script>

<style>
</style>