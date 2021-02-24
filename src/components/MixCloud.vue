<template>
  <div v-if="shows.length" v-for="show in shows" class="mb-4">
    <MixCloudShow :feed="show.feed" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import MixCloudShow from './MixCloudShow.vue'

export default {
  name: "MixCloud",
  components: {
    MixCloudShow
  },
  data() {
    return {
      shows: []
    }
  },
  props: {
    count: {
      type: Number,
      default: 5,
    },
    offset: {
      type: Number,
      default: 0,
    }
  },
  mounted() {
    this.fetchMix()
  },
  methods: {
    fetchMix() {
      fetch('https://api.mixcloud.com/harrymisoura/cloudcasts/')
        .then(res => res.json())
        .then(json => {
          this.shows = json.data
            .slice(this.offset, this.count + this.offset)
            .map(m => ({ name: m.name, feed: m.key }))
        })
        .catch(err => console.log(err))
    }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>


