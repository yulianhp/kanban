<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <img src="https://lh3.googleusercontent.com/-K-AR6CydUX_dtZ-Atx-NvOxrCi9fRHPIQUCTzsXftR_pI6bjKOdXqPh2BkTNgXaAVE=w300" alt="logo" style="width:3%;">
    <h4 style="margin-left:3px;">Kanban</h4>
    <form class="form-inline my-2 my-lg-0" style="margin:auto;">
      <input class="form-control mr-sm-2" type="text" placeholder="Add new task" v-model="task">
      <button class="btn btn-secondary my-2 my-sm-0" type="button" @click="addTask">+</button>
    </form>
  </nav>
</template>

<script>
import {db} from '../firebase.js'
export default {
  data: function () {
    return {
      task: ''
    }
  },
  methods: {
    addTask () {
      db.ref('todo').push({
        task: this.task
      })
      this.task = ''
    }
  }
}
</script>

<style lang="css">
</style>
