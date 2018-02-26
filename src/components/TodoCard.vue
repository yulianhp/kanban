<template lang="html">
  <div class="">
    <div class="card text-white bg-secondary mb-3" style="" v-for="task in allTasks" :key="task._id">
      <div class="card-header">{{task.task}}</div>
      <div class="card-body container" style="">
        <button type="button" class="btn btn-danger" style="width:32%;" @click="deleteTask(task['.key'])">Delete</button>
        <button type="button" class="btn btn-success" style="width:32%;float:right;" @click="moveTodo(task.task,task['.key'])">Do it!</button>
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
    allTasks: db.ref('todo')
  },
  methods: {
    deleteTask (key) {
      db.ref('todo').child(key).remove()
    },
    moveTodo (task, key) {
      db.ref('onprogress').push({
        task: task
      })
      this.deleteTask(key)
    }
  }
}
</script>

<style lang="css">
</style>
