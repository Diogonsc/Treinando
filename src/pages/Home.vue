<template>
  <div class="statusCard">
				<StatusCard
        background="green-14"
        :counter="100"
        title="Agendadas"
        />
				<StatusCard
					background="red-6"
					:counter="20"
					title="Desmarcadas"
				/>
				<StatusCard
					background="yellow-9"
					:counter="10"
					title="Reagendadas"
				/>
        <StatusCard
        background="accent"
        :counter="70"
        title="Atendidas"
        />
  </div>
</template>
<script>
import StatusCard from '../components/cards/StatusCard.vue'
export default{
  components: { StatusCard },
  setup() {

  },
}
</script>
<style scoped>
  .statusCard {
    display: flex;
    justify-content: space-evenly;
  }
</style>

