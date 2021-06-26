<template>
  <vs-card type="5">
    <template #title>
      <h2>{{ member.name }} ({{ member.member_type }})</h2>
    </template>
    <template #img>
      <img :src="member.image_url" :alt="member.name" />
    </template>
    <template #text>
      <p>
        {{ member.bio }}
      </p>
    </template>
    <template #interactions>
      <vs-button color="linkedin" circle icon :href="member.linkedin_url" blank>
        <i class="bx bxl-linkedin"></i>
      </vs-button>
      <vs-button color="twitter" circle icon :href="member.twitter_url" blank>
        <i class="bx bxl-twitter"></i>
      </vs-button>
      <vs-button color="#171717" circle icon :href="member.website_url" blank>
        <i class="bx bxl-github"></i>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: "Member",
  props: {
    member: Object,
  },
};
</script>

<style>
</style>
