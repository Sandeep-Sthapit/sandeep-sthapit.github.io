<template>
  <li class="container" @click="toggleDetail">
    <div class="wrapper">
      <div class="title-container">
        <div class="titles">
          <p class="date" v-if="experienceItem.date">
            {{ experienceItem.date }}
          </p>
          <h2 class="title">{{ experienceItem.title }}</h2>
        </div>
        <div class="expand">
          <p>{{ expand }}</p>
        </div>
      </div>
      <a
        class="institution green-link"
        :href="experienceItem.institution.url"
        target="_blank"
        >{{ experienceItem.institution.name }}</a
      >
      <p class="location" v-if="experienceItem.location">
        {{ experienceItem.location }}
      </p>
      <div class="details" v-if="experienceItem.details" v-show="showDetails">
        <p
          class="detail"
          v-for="(detail, idx) in experienceItem.details"
          :key="idx"
          v-html="detail"
        ></p>
      </div>
      <div class="samples" v-if="experienceItem.samples" v-show="showDetails">
        <sampleWork
          v-for="(work, idx) in experienceItem.samples"
          :key="idx"
          :work="work"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

const sampleWork = defineAsyncComponent(() =>
  import("../components/ContainerSampleWork.vue")
);

export default {
  components: {
    sampleWork,
  },
  props: {
    experienceItem: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showDetails = ref(false);
    const expand = ref("+");

    const toggleDetail = () => {
      showDetails.value = !showDetails.value;
      expand.value === "+" ? (expand.value = "-") : (expand.value = "+");
    };

    return {
      showDetails,
      toggleDetail,
      expand,
    };
  },
};
</script>

<style scoped>
.container {
  list-style: none;
  margin: 0 auto;
  border-left: 2px solid #74e7b8;
  padding-left: 3rem;
  padding-bottom: 2rem;
  width: 100%;
  font-family: "Quicksand", sans-serif;
}
.container::before {
  position: absolute;
  cursor: pointer;
  left: -1rem;
  top: -0.5px;
  content: " ";
  border: 0.5rem solid rgba(141, 243, 184, 0.5);
  border-radius: 50%;
  background: #31af70;
  height: 1rem;
  width: 1rem;
  transition: all 400ms ease-in-out;
}
.container:last-child {
  border-left: 0;
}
.container:hover::before {
  border-color: #31af70;
  transition: all 500ms ease-in-out;
}
.container:hover .expand > p {
  color: #d49a89;
}
.wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.title-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Open Sans", sans-serif;
}
.expand {
  height: 100%;
  margin-right: 1rem;
  display: flex;
  align-items: center;
}
.expand p {
  font-size: 2rem;
  margin: 0;
  color: #41b883;
  transition: 0.2s ease-in-out;
}
.date {
  color: #6f6f6f;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.title {
  color: #444;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: left;
  width: 100%;
}
.institution {
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 0.3rem;
}
.details {
  width: 100%;
  text-align: justify;
}
.detail {
  color: #666;
  font-size: 0.9rem;
}
.samples {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media screen and (max-width: 640px) {
  .institution {
    font-size: 0.9rem;
  }

  .container {
    margin: 0 auto;
    border-left: none;
    padding-left: 1rem;
    padding-bottom: 2rem;
    width: 100%;
    font-family: "Quicksand", sans-serif;
  }
  .container::before {
    position: absolute;
    cursor: pointer;
    left: -1rem;
    top: -0.5px;
    content: " ";
    border: none;
    border-radius: 50%;
    background: none;
    height: 0;
    width: 0;
    transition: none;
  }
  .container:last-child {
    border-left: 0;
  }
  .container:hover::before {
    border: none;
    transition: none;
  }
}
</style>