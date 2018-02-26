<template lang="html">
  <div class="card border-light mb-3 mt-3" style="">
    <div class="card-header"><h4 style="text-align: center;margin-bottom: 0%;">Done</h4></div>
    <div class="card-body">
      <DoneCard/>
    </div>
  </div>
</template>

<script>
import DoneCard from './DoneCard.vue'
export default {
  components: {
    DoneCard
  }
}
</script>

<style lang="css">
</style>
