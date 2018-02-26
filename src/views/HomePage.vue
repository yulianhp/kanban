<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <TodoBlock/>
        </div>
        <div class="col-lg-4">
          <OnProgressBlock/>
        </div>
        <div class="col-lg-4">
          <DoneBlock/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TodoBlock from '../components/TodoBlock.vue'
import OnProgressBlock from '../components/OnProgressBlock.vue'
import DoneBlock from '../components/DoneBlock.vue'

export default {
  components: {
    Navbar, TodoBlock, OnProgressBlock, DoneBlock
  }
}
</script>

<style lang="css">
</style>
