<template>
  <a :href="url" target="_blank" class="event-anchor">
    <vs-card class="event-card">
      <template #title>
        <h3>{{ title }}</h3>
      </template>
      <template #img>
        <img :src="image_url" :alt="title" />
      </template>
      <template #text>
        <p>
          {{ start_at }}
        </p>
      </template>
    </vs-card>
  </a>
</template>

<script>
export default {
  name: "Event",
  props: {
    id: { type: Number },
    title: { type: String },
    venue: { type: String },
    url: { type: String },
    start_at: { type: String },
    end_at: { type: String },
    image_url: { type: String },
  },
};
</script>

<style scoped>
.event-card {
  padding: 10px;
  display: grid;
  place-items: center;
}

.bx-link-external {
  color: black;
}

.event-anchor {
  text-decoration: none;
}
</style>
