<template lang="html">
  <div class="">
    <div class="card text-black bg-light mb-3" style="" v-for="task in allTasks" :key="task._id">
      <div class="card-header" style="text-decoration: line-through;">{{task.task}}</div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
  data: function () {
    return {
    }
  },
  firebase: {
    allTasks: db.ref('done')
  }
}
</script>

<style lang="css">
</style>
