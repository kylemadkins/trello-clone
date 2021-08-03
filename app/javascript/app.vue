<template>
  <div id="app">
    <div class="row">
      <div class="col-3" v-for="list in lists" :key="list.id">
        <h2>{{ list.name }}</h2>
        <hr />
        <div v-for="card in list.cards" :key="card.id" class="card card-body mb-3">
          <h3>{{ card.name }}</h3>
        </div>
        <form @submit.prevent="submitMessages(list.id)" class="card card-body">
          <input v-model="messages[list.id]" class="form-control">
          <button class="btn btn-secondary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Rails from "@rails/ujs"

export default {
  data() {
    return {
      messages: {},
      lists: this.olists
    }
  },
  props: ["olists"],
  methods: {
    submitMessages(listId) {
      if (this.messages[listId]) {
        var data = new FormData
        data.append("card[list_id]", listId)
        data.append("card[name]", this.messages[listId])

        Rails.ajax({
          url: "/cards",
          type: "POST",
          data,
          dataType: "json",
          success: (data) => {
            const idx = this.lists.findIndex(item => item.id === listId)
            this.lists[idx].cards.push(data)
            this.messages[listId] = undefined
          }
        })
      } else {
        alert("Card name cannot be blank")
      }
    }
  }
}
</script>

<style scoped>
</style>
