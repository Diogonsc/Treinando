<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="accent">
      <EntryTimeLine
        title="Registro"
        subtitle="Terça, 16 Novembro, 2021"
      />
      <EntryTimeLine
        title="Registro"
       subtitle="Segunda, 15 Novembro, 2021"
      />
      <EntryTimeLine
        title="Registro"
        subtitle="Domingo, 14 Novembro, 2021"
      />
      <EntryTimeLine
        title="Registro"
        subtitle="Sabado, 13 Novembro, 2021"
      />
      <EntryTimeLine
        title="Registro"
        subtitle=" Sexta, 12 Novembro, 2021"
      />
    </q-timeline>
  </div>
</template>

<script>
import EntryTimeLine from './EntryTimeLine.vue'
  export default {
    components: { EntryTimeLine }
  }
</script>
