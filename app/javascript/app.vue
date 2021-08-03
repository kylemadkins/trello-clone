<template>
  <div id="app">
    <div class="row">
      <div class="col-3" v-for="list in lists" :key="list.id">
        <h2>{{ list.name }}</h2>
        <hr />
        <div v-for="card in list.cards" :key="card.id" class="card card-body">
          <h3>{{ card.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lists']
}
</script>

<style scoped>
</style>
