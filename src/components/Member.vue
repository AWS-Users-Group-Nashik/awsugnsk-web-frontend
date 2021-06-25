<template>
  <vs-card type="5">
    <template #title>
      <h2>{{ member.name }}</h2>
    </template>
    <template #img>
      <img
        :src="member.image_url"
        alt="member_photo"
      />
    </template>
    <template #text>
      <h3>
        {{ member.member_type }}
      </h3>
      <p>
        {{ member.bio }}
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon :href="member.linkedin_url" blank>
        <i class="bx bxl-linkedin"></i>
      </vs-button>
      <vs-button primary icon :href="member.twitter_url" blank>
        <i class="bx bxl-twitter"></i>
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: "Member",
  props: {
    member: Object
  }
};
</script>

<style></style>
