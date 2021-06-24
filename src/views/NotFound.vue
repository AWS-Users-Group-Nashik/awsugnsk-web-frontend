<template>
  <div class="not-found-wrapper">
    <img class="not-found-image" src="../assets/images/404.png" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
.not-found-wrapper {
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
}

.not-found-image {
  height: 500px;
  width: 700px;
}
</style>