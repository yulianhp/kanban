<template lang="html">
  <div class="">
    <div class="card text-white bg-success mb-3" style="" v-for="task in allTasks" :key="task._id">
      <div class="card-header">{{task.task}}</div>
      <div class="card-body container" style="">
        <button type="button" class="btn btn-danger" style="width:32%;" @click="deleteTask(task['.key'])">Delete</button>
        <button type="button" class="btn btn-warning" style="width:32%;float:right;" @click="moveOnProgress(task.task,task['.key'])">Done</button>
      </div>
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
    allTasks: db.ref('onprogress')
  },
  methods: {
    deleteTask (key) {
      db.ref('onprogress').child(key).remove()
    },
    moveOnProgress (task, key) {
      db.ref('done').push({
        task: task
      })
      this.deleteTask(key)
    }
  }
}
</script>

<style lang="css">
</style>
