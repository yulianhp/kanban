<template lang="html">
  <div class="card border-secondary mb-3 mt-3" style="">
    <div class="card-header"><h4 style="text-align: center;margin-bottom: 0%;">To Do</h4></div>
    <div class="card-body">
      <TodoCard/>
    </div>
  </div>
</template>

<script>
import TodoCard from './TodoCard.vue'
export default {
  components: {
    TodoCard
  }
}
</script>

<style lang="css">
</style>
