<template>
  <div class="event-wrapper">
    <vs-col offset="1" w="10" justify="center">
      <div class="event-card">
        <vs-row>
          <vs-col type="flex" w="6">
            <vs-col type="flex" style="margin-top: -40px" w="4">
              <img class="story-img" v-bind:src="poster_url" />
            </vs-col>
            <vs-col class="title-date-wrapper" w="6">
              <div class="story-title" style="width: 100%">{{ title }}</div>
              <div class="story-date">{{ date }}</div>
            </vs-col>
          </vs-col>
          <vs-col
            type="flex"
            w="6"
            style="flex-flow: wrap; justify-content: flex-end"
          >
            <div class="description" v-html="content"></div>
            <vs-button circle shadow style="margin: 10px; padding: 5px">
              Read more
              <template #animate>
                <i class="bx bx-book-reader"></i>
              </template>
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
  </div>
</template>

<script>
export default {
  name: "Story",
  props: {
    id: { type: Number },
    title: { type: String },
    speaker_name: { type: String },
    poster_url: { type: String },
    date: { type: String },
    content: { type: String },
  },
};
</script>

<style>
.event-wrapper {
  margin: 60px;
}

.event-card {
  padding: 20px;
  border-radius: 30px;
  transition: 500ms ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.event-card:hover {
  transition: 500ms ease;
  box-shadow: rgba(149, 157, 165, 1) 0px 20px 40px;
}

.event-card:hover .story-img {
  transition: 500ms ease;
  margin-top: -30px;
  margin-left: -30px;
  height: 170px;
  width: 170px;
}

.story-img {
  height: 150px;
  width: 150px;
  transition: 500ms ease;
  border-radius: 30px;
}

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.story-title {
  font-size: 30px;
  font-weight: bold;
}

.title-date-wrapper {
  flex-flow: wrap;
}

.story-date {
  font-size: 10px;
}
</style>