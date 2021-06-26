<template>
  <a :href="url" target="_blank">
    <vs-card type="4" class="learning-card">
      <template #title>
        <h3>{{ title }}</h3>
      </template>
      <template #img>
        <img :src="image_url" :alt="title" class="learning-image" />
      </template>
      <template #text>
        <p>{{ proficiency }}</p>
      </template>
      <template #interactions>
        <vs-button v-bind:color="buttonColor" icon :href="url" blank circle>
          <i v-bind:class="buttonIcon"></i>
        </vs-button>
      </template>
    </vs-card>
  </a>
</template>

<script>
export default {
  name: "Learning",
  props: {
    id: { type: Number },
    title: { type: String },
    proficiency: { type: String },
    type: { type: String },
    url: { type: String },
    image_url: { type: String },
  },
  computed: {
    buttonColor: function () {
      return this.type == "Youtube" ? "youtube" : "#171717";
    },
    buttonIcon: function () {
      return this.type == "Youtube" ? "bx bxl-youtube" : "bx bxl-medium";
    },
  },
};
</script>

<style>
.learning-card {
  padding: 10px;
  display: grid;
  place-items: center;
}

.learning-image {
  height: 250px;
  width: 500px;
}

.learning-card .vs-card__text {
  width: 100%;
  background: none !important;
  color: white;
}

.vs-card-content.type-4 .vs-card {
  max-width: none;
}
</style>