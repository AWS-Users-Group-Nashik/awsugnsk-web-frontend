<template>
  <div class="story-wrapper">
    <vs-col xs="12" justify="center">
      <div class="story-card">
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
            <vs-button
              circle
              shadow
              style="margin: 10px; padding: 5px"
              @click="openDialog()"
            >
              Read more
              <template #animate>
                <i class="bx bx-book-reader"></i>
              </template>
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
    <FullStoryDialog
      v-if="dialogActive"
      :story="story"
      v-on:close="closeCallback"
    />
  </div>
</template>

<script>
import FullStoryDialog from "./FullStoryDialog.vue";
export default {
  name: "Story",
  components: {
    FullStoryDialog,
  },
  props: {
    id: {
      FullStoryDialogtype: Number,
    },
    title: { type: String },
    speaker_name: { type: String },
    poster_url: { type: String },
    date: { type: String },
    content: { type: String },
  },
  mounted() {
    this.story = { ...this._props };
  },
  data: () => ({
    dialogActive: false,
  }),
  methods: {
    openDialog() {
      this.dialogActive = true;
    },
    closeCallback() {
      this.dialogActive = false;
    },
  },
};
</script>

<style>
.story-wrapper {
  margin: 50px 0px 70px 0px;
  display: grid;
  place-items: center;
}

.story-card {
  padding: 20px;
  border-radius: 30px;
  transition: 500ms ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 15px;
}

.story-card:hover {
  transition: 500ms ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.story-card:hover .story-img {
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
  object-fit: cover;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100px;
  line-height: 20px;
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

  .story-wrapper {
    margin: 50px 10px 70px 10px;
  }
}
</style>