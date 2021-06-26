<template>
  <div class="no-items-wrapper">
    <span class="no-items-text">No {{ title }} found</span>
  </div>
</template>

<script>
export default {
  name: "NoItems",
  props: {
    title: { type: String },
  },
};
</script>

<style>
.no-items-wrapper {
  height: 100px;
  width: 100%;
  display: grid;
  place-items: center;
}

.no-items-text {
  font-size: 20px;
  font-weight: bolder;
  padding: 10px 20px;
  background: #ffc074;
  color: white;
  border-radius: 10px;
}
</style>