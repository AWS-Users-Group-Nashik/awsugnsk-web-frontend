<template>
  <vs-dialog
    @close="handleClose"
    overflow-hidden
    full-screen
    v-model="dialogActive"
  >
    <div class="dialog-content-wrapper">
      <div>
        <h4 class="dialog-story-title">{{ story.title }}</h4>
        <span class="dialog-story-date">{{ story.date }}</span>
      </div>
      <div class="dialog-story-image-wrapper">
        <img :src="story.poster_url" class="dialog-story-image" />
      </div>
      <div v-html="story.content"></div>
    </div>
  </vs-dialog>
</template>

<script>
export default {
  data: () => ({
    dialogActive: true,
  }),
  props: {
    story: Object,
    close: Function,
  },
  methods: {
    handleClose() {
      this.dialogActive = false;
      this.$emit("close");
    },
  },
};
</script>

<style>
.dialog-content-wrapper {
  margin: 20px;
}

.dialog-story-title {
  margin-bottom: 0px;
  font-size: 30px;
  text-decoration: #ffc074 solid overline;
}

.dialog-story-date {
  font-size: 12px;
}

.dialog-story-image {
  max-height: 400px;
  width: 600px;
  margin-top: 20px;
  border-radius: 20px;
}

.vs-dialog {
  margin: 20px 0px;
  overflow-y: auto;
  height: fit-content;
}

.vs-dialog__close {
  top: 10px;
  right: 10px;
  position: fixed;
}

@media screen and (max-width: 768px) {
  .dialog-story-image {
    width: 80vw;
  }

  .dialog-content-wrapper {
    margin: 10px;
  }

  .vs-dialog {
    margin: 20px 0px;
  }

  .dialog-story-image-wrapper {
    display: grid;
    place-items: center;
  }
}
</style>