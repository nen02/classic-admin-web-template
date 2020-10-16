<template>
  <div class="components">
    <button @click="getData">Get data</button>
    <p v-for="(item, index) in apiData"
      :key="index"
      v-html="item.question">
    </p>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data () {
    return {
      apiData: null
    }
  },
  methods: {
    getData: function () {
      this.$axios.get('https://opentdb.com/api.php?amount=50')
        .then(response => { this.apiData = response.data.results })
    }
  }
}
</script>
