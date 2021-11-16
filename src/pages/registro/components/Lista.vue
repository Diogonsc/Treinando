<template>
	<div>
		<q-list class="bg-white shadow-2" separator bordered>
			<q-item
				class="q-pl-sm"
				v-for="n in 3"
				:key="n"
				clickable
			>

				<q-item-section class="col-2">
					<q-item-label>
						<q-icon
							name="fas fa-map-marker-alt"
							size="sm"
							class="q-ml-lg q-mr-sm"
						/>Itaboraí, RJ
					</q-item-label>
				</q-item-section>
				<q-item-section>
					<q-item-label
						class="text-weight-bold row"
						style="color: #666; font-size: 10px"
					>
						<q-badge
							color="green"
							rounded
							class="q-mr-sm"
						/>COMPLETA
					</q-item-label>
				</q-item-section>
				<q-item-section class="col-7">
					<div class="q-gutter-xs">
						<q-chip
							square
							size="md"
							color="green-13"
							text-color="white"
						>
							<q-avatar
								color="positive"
								text-color="white"
								icon="far fa-clock"
							/>
							<q-item-label
								class="q-px-xs text-uppercase chip-label"
							>
								08:35 PM
							</q-item-label>
						</q-chip>

						<q-chip
							square
							style="background-color: #e6bf3e"
							text-color="white"
						>
							<q-avatar
								style="background-color: #b89932"
								text-color="white"
								icon="fas fa-certificate"
							/>
							<q-item-label
								class="q-px-xs text-uppercase chip-label"
							>
								Original
							</q-item-label>
						</q-chip>

						<q-chip square color="pink-6" text-color="white">
							<q-avatar
								color="pink-9"
								text-color="white"
								icon="update"
							/>
							<q-item-label class="q-px-xs chip-label">
								24 mins
							</q-item-label>
						</q-chip>

						<q-chip square color="blue" text-color="white">
							<q-avatar
								color="blue-9"
								text-color="white"
								icon="far fa-network-wired"
							/>
							<q-item-label class="q-px-xs chip-label">
								24/30 Q
							</q-item-label>
						</q-chip>
					</div>
				</q-item-section>
				<q-item-section side>
					<q-icon
						name="fas fa-long-arrow-alt-right"
						size="xs"
						class="bg-primary text-white q-pa-xs rounded-borders"
					/>
				</q-item-section>
			</q-item>
		</q-list>
    <Dialog ref="intDialog" />
	</div>
</template>
<script>
import Dialog from '../../../components/dialog/Dialog.vue'
export default {
  components: { Dialog },
  setup () {
    return {
      intDialog: ref(false)
    }
  }
}
</script>
<style scoped>
	.chip-label {
		font-size: 12px;
	}
</style>

