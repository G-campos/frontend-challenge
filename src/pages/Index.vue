<template>
  <q-page class="flex flex-center row">
    <section class="col-6 row">
      <q-card flat bordered class="col-6">
        <span class="q-pa-md text-h5">Informações gerais</span>
        <q-item class="row">
          <div class="q-pa-md q-gutter-sm">
            <q-avatar size="80px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </div>
          <q-item-section>
            <q-item-label>
              {{pessoa.nome}}
            </q-item-label>
            <q-item-label>
              {{pessoa.empresa}}
            </q-item-label>
            <q-chip square style="background-color:#C8E6C9; width:60px;">
              {{pessoa.status}}
            </q-chip>
          </q-item-section>
        </q-item>
        <q-item class="row">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-phone" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              ({{pessoa.ddd}}) {{pessoa.celular}}
            </q-item-label>
            <q-item-label>
              Telefone
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="row">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-email" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              {{pessoa.email}}
            </q-item-label>
            <q-item-label>
              Email
            </q-item-label>
          </q-item-section>
        </q-item>
        <div class="row items-end no-wrap">
          <div class="col"></div>
          <div>
            <q-btn class="col" flat round icon="mdi-whatsapp"/>
          </div>
          <div>
            <q-btn class="col" flat round icon="mdi-facebook"/>
          </div>
          <div>
            <q-btn class="col" flat round icon="mdi-instagram"/>
          </div>
          <div>
            <q-btn class="col" flat round icon="mdi-twitter"/>
          </div>
          <div>
            <q-btn class="col" flat round icon="mdi-linkedin"/>
          </div>
        </div>
      </q-card>

      <q-card class="col-6">
        teste card 2
      </q-card>

      <q-card class="col-6">
        teste card 3
      </q-card>

      <q-card class="col-6">
        teste card 4
      </q-card>

      <q-card class="col-6">
        teste card 5
      </q-card>

      <q-card class="col-6">
        teste card 6
      </q-card>
    </section>
    <section class="col-6">
      <q-card class="col-12">teste card 1</q-card>
    </section>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pessoa: {
        nome: 'Fulana de Tal',
        empresa: 'Acme inc.',
        status: 'Ativo',
        ddd: '45',
        celular: '99555-5555',
        email: 'fulana@email.com',
        whatsapp: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: ''
      }
    }
  },
}
</script>
