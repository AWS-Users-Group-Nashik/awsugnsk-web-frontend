<template>
  <div class="event-wrapper">
    <vs-col xs="12" justify="center">
      <div class="event-card">
        <vs-row>
          <vs-col type="flex" w="6" xs="12" style="flex-flow: wrap">
            <div>
              <vs-col type="flex" style="margin-top: -40px" w="4">
                <img class="story-img" v-bind:src="poster_url" />
              </vs-col>
            </div>
            <vs-col class="title-date-wrapper" w="5" xs="12" lg="6" sm="12">
              <div class="story-title">{{ title }}</div>
              <div class="story-date">{{ date }}</div>
            </vs-col>
          </vs-col>
          <vs-col
            type="flex"
            w="6"
            xs="12"
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
  margin: 70px 10px;
  display: grid;
  place-items: center;
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
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.title-date-wrapper {
  flex-flow: wrap;
  margin-left: 20px;
}

.story-date {
  font-size: 10px;
}

@media screen and (max-width: 768px) {
  .title-date-wrapper {
    margin-top: 20px;
    margin-left: 0px;
  }
}
</style>