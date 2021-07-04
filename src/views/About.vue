<template>
  <div class="about-container container">
    <h2 class="page-heading page-heading-title">About</h2>
    <div class="center grid about-us">
      <vs-row vs-w="12">
        <vs-col justify="center" align="center" lg="12" sm="12" xs="12">
          <p>
            Welcome!<br />
            <b>AWS User Group (UG), Nashik</b> is a place for
            developers that share the common interest of building with AWS. Here
            we will share content relevant to AWS UG Nashik, all the talks
            hosted at AWS UG Nashik, resources to learn the AWS products and a
            lot of exciting stuff.<br />
            Make sure you are subscribed to the newsletter for staying updated
            with upcoming talks and events.
          </p>
        </vs-col>
      </vs-row>
    </div>
    <div class="center grid member-cards">
      <h2 class="members-subtitle">Organizers</h2>
      <vs-row vs-w="12">
        <vs-col
          :key="member.id"
          v-for="member in coreMembers"
          type="flex"
          justify="center"
          lg="4"
          sm="6"
          xs="12"
          class="member-card"
        >
          <Member :member="member" />
        </vs-col>
      </vs-row>
    </div>
    <div v-if="volunteers.length" class="center grid member-cards">
      <h2 class="members-subtitle">Volunteers</h2>
      <vs-row vs-w="12">
        <vs-col
          :key="member.id"
          v-for="member in volunteers"
          type="flex"
          justify="center"
          lg="4"
          sm="6"
          xs="12"
          class="member-card"
        >
          <Member :member="member" />
        </vs-col>
      </vs-row>
    </div>
    <div v-if="!coreMembers.length && isResponseReceived">
      <NoItems :title="'members'" />
    </div>
  </div>
</template>

<script>
import Member from "@/components/Member.vue";
import NoItems from "@/components/NoItems.vue";
import ApiService from "@/common/api.service";
export default {
  name: "About",
  components: { Member, NoItems },
  data() {
    return {
      coreMembers: [],
      volunteers: [],
      windowWidth: null,
      isResponseReceived: false,
    };
  },
  created() {
    const loading = this.$vs.loading({ type: "circles", color: "#ffc074" });
    ApiService.get("/members/").then((response) => {
      if (response.data.length) {
        [this.coreMembers, this.volunteers] = response.data.reduce(
          ([coreMembers, volunteers], member) => {
            return member.member_type == "Volunteer"
              ? [coreMembers, [...volunteers, member]]
              : [[...coreMembers, member], volunteers];
          },
          [[], []]
        );
      }
      this.isResponseReceived = true;
      loading.close();
    });
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  unmounted() {
    window.removeEventListener("resize");
  },
};
</script>

<style>
.about-us {
  margin-top: 20px;
}

.about-container {
  margin-top: 4rem;
}

.about-us h3 {
  text-align: center;
  font-size: 2.5rem;
}

.about-us p {
  font-size: 1rem;
  text-align: justify;
}

.member-cards {
  margin-top: 2rem;
}

.member-card {
  padding: 10px;
}

.members-subtitle {
  text-decoration: #ffc074 solid overline;
}

@media screen and (max-width: 768px) {
  .about-us,
  .members-subtitle {
    margin: 5vw;
  }
}
</style>
