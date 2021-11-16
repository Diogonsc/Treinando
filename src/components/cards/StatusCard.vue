<template>
  <q-card
		dark
		bordered
		class="my-card q-mr-lg q-pa-md col"
		:class="`bg-${background}`"
	>
		<q-card-section class="section-container q-px-lg">
			<div class="card-counter text-weight-light">{{ counter }}</div>
		</q-card-section>

		<q-separator dark inset />

		<q-card-section class="section-container-2">
			<div class="card-description">{{ title }}</div>
		</q-card-section>
	</q-card>
</template>

<script>
export default {
  props: {
  label: String,
  background: String,
  counter: Number,
  title: String
 }
}
</script>

<style lang="scss" scoped>
	.section-container {
		padding-top: 0;
		padding-bottom: 0;
	}
	.section-container-2 {
		padding: 5px 20px 15px;
	}
	.card-counter {
		font-family: 'Open Sans', sans-serif;
		font-size: 40px;
	}
	.card-description {

		text-transform: uppercase;
		font-size: 22px;
		font-weight: 400;
		color: #ffffffba;
	}
</style>
