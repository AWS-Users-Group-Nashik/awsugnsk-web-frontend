<template>
  <div class="page-heading learnings-wrapper">
    <vs-row class="page-heading-title">
      <vs-col lg="6" sm="6" xs="12">
        <span style="font-weight: bold">Learnings</span>
      </vs-col>
      <vs-col lg="6" sm="6" xs="12" class="select-column">
        <div class="select-wrapper">
          <vs-select
            placeholder="Select"
            v-model="value"
            @change="filterLearnings()"
          >
            <vs-option label="All" value="All"> All </vs-option>
            <vs-option label="Beginner" value="Beginner"> Beginner </vs-option>
            <vs-option label="Intermediate" value="Intermediate">
              Intermediate
            </vs-option>
            <vs-option label="Advanced" value="Advanced"> Advanced </vs-option>
          </vs-select>
        </div>
      </vs-col>
    </vs-row>
    <div class="container">
      <vs-row>
        <vs-col
          lg="4"
          sm="6"
          xs="12"
          v-for="learning in filteredLearnings"
          :key="learning.id"
        >
          <Learning v-bind="learning" />
        </vs-col>
      </vs-row>
      <div v-if="!filteredLearnings.length && isResponseReceived">
        <NoItems :title="'learnings'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Learning from "@/components/Learning.vue";
import NoItems from "@/components/NoItems.vue";
import ApiService from "@/common/api.service";
export default {
  name: "Learnings",
  components: { Learning, NoItems },
  data() {
    return {
      learnings: [],
      filteredLearnings: [],
      value: "All",
      isResponseReceived: false,
    };
  },
  created() {
    const loading = this.$vs.loading({ type: "circles", color: "#ffc074" });
    ApiService.get("/learnings/").then((response) => {
      this.learnings = response.data;
      this.filteredLearnings = this.learnings;
      this.isResponseReceived = true;
      loading.close();
    });
  },
  methods: {
    filterLearnings() {
      if (this.value == "All") return (this.filteredLearnings = this.learnings);
      this.filteredLearnings = this.learnings.filter(
        (learning) => learning.proficiency == this.value
      );
    },
  },
};
</script>

<style>
.container {
  margin-top: 20px;
}

.select-column {
  display: flex !important;
  justify-content: flex-end !important;
  align-self: center !important;
}

@media screen and (max-width: 768px) {
  .learnings-wrapper {
    margin-left: 0px;
  }
  .page-heading-title {
    margin-left: 5vw;
  }
  .select-wrapper {
    margin-top: 20px;
  }
  .select-column {
    display: block !important;
  }
}
</style>