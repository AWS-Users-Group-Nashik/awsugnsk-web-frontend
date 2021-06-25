<template>
  <vs-card type="5">
    <template #title>
      <h2>{{ member.name }}</h2>
    </template>
    <template #img>
      <img
        src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
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
      <vs-button danger icon>
        <i class="bx bxl-linkedin"></i>
      </vs-button>
      <vs-button primary icon>
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
