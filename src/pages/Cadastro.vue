<template>
  <h3>Cadastro</h3>
  <hr>
  <div class="q-pa-md row inputs">
    <div class="q-gutter-y-md col-6" style="max-width: 600px">
      <q-input color="purple-12" v-model="nome" label="Nome">
        <template v-slot:prepend>
          <q-icon name="fas fa-user" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="nascimento" label="Data Nascimento">
        <template v-slot:prepend>
          <q-icon name="fas fa-calendar-alt" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="cpf" label="CPF">
        <template v-slot:prepend>
          <q-icon name="fas fa-id-card" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="telefone" label="Telefone">
        <template v-slot:prepend>
          <q-icon name="fas fa-phone-alt" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="email" label="E-mail">
        <template v-slot:prepend>
          <q-icon name="fas fa-envelope" />
        </template>
      </q-input>
    </div>
    <div class="q-gutter-y-md col-6" style="max-width: 600px">
      <q-input color="purple-12" v-model="endereco" label="Endereço">
        <template v-slot:prepend>
          <q-icon name="fas fa-home" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="bairro" label="Bairro">
        <template v-slot:prepend>
          <q-icon name="fas fa-map" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="cidade" label="Cidade">
        <template v-slot:prepend>
          <q-icon name="fas fa-city" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="escolaridade" label="Escolaridade">
        <template v-slot:prepend>
          <q-icon name="fas fa-file-certificate" />
        </template>
      </q-input>
      <q-input color="purple-12" v-model="profissao" label="Profissão">
        <template v-slot:prepend>
          <q-icon name="fas fa-tools" />
        </template>
      </q-input>
    </div>
  </div>
  <div class="btn-button row q-gutter-sm">
    <q-btn class="btn" unelevated rounded color="accent" label="Salvar" @click="triggerPositive" />
  </div>
</template>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()
    return {
      triggerPositive () {
        $q.notify({
          type: 'positive',
          message: 'This is a "positive" type notification.'
        })
        setTimeout(() => {
          notif({
            type: 'positive',
            message: 'Found the results that you were looking for',
            timeout: 1000
          })
        }, 4000)
      },
      nome: ref(''),
      nascimento: ref(''),
      cpf: ref(''),
      telefone: ref(''),
      email: ref(''),
      endereco: ref(''),
      bairro: ref(''),
      cidade: ref(''),
      escolaridade: ref(''),
      profissao: ref('')
    }
  }
}
</script>
<style>

  .inputs {
    display: flex;
    justify-content: space-around;
  }

  .q-item.q-router-link--active, .q-item--active {
    color: purple;
  }

  .btn-button {
    display: flex;
    justify-content: center;
  }

  .btn {
    width: 10%;
    margin-top: 30px;
  }
</style>

