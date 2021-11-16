<template>
 <div class="">
    <h3>Registro</h3>
  <hr>
    <Timeline>
      <Lista />
		</Timeline>
 </div>
</template>
<script>
import Timeline from '../../components/timeline/TimeLine.vue'
import Lista from './components/Lista.vue'

export default {
  components: { Timeline, Lista }
}
</script>

