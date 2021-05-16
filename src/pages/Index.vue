<template>
  <q-page class="flex flex-center row">
    <section class="col-6 row">
      <q-card class="col-6 row">
        <span class="q-pa-md text-h5">Informações gerais</span>
        <q-item class="row col-12">
          <div class="q-pr-sm">
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
        <q-item class="row col-12">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-phone" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              ({{pessoa.contato.ddd}}) {{pessoa.contato.celular}}
            </q-item-label>
            <q-item-label>
              Telefone
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="row col-12">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-email" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              {{pessoa.contato.email}}
            </q-item-label>
            <q-item-label>
              Email
            </q-item-label>
          </q-item-section>
        </q-item>
        <div class="row items-end no-wrap col-12">
          <div class="col"></div>
          <div class="q-gutter-sm">
            <q-btn flat round icon="mdi-whatsapp"/>
            <q-btn flat round icon="mdi-facebook"/>
            <q-btn flat round icon="mdi-instagram"/>
            <q-btn flat round icon="mdi-twitter"/>
            <q-btn flat round icon="mdi-linkedin"/>
          </div>
        </div>
      </q-card>

      <q-card class="col-6 row">
        <span class="q-pa-md text-h5 col-12">Local</span>
        <div class="">
          google maps
        </div>
        <q-item class="row">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-map-marker"/>
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              {{pessoa.endereco.logradouro + ' ' +pessoa.endereco.rua }}, {{pessoa.endereco.numero}}
            </q-item-label>
            <q-item-label>
              {{pessoa.endereco.referencia}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="col-6 row">
        <span class="q-pa-md text-h5 col-12">
          Oportunidades ({{totalOportunidades}})
          <q-btn flat round icon="mdi-information"/>
        </span>
        <q-item class="col-6 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="green" text-color="white">{{totalOportunidades}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              {{statusOportunidades[0]}}
            </q-item-label>
            <q-item-label>
              R$ {{oportunidades.ganhas}}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="col-6 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="red" text-color="white">{{totalOportunidades}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              {{statusOportunidades[1]}}
            </q-item-label>
            <q-item-label>
              R$ {{oportunidades.perdidas}}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="col-6 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="blue" text-color="white">{{totalOportunidades}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              {{statusOportunidades[2]}}
            </q-item-label>
            <q-item-label>
              {{oportunidades.abertas}}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="col-6 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="brown" text-color="white">{{totalOportunidades}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              {{statusOportunidades[3]}}
            </q-item-label>
            <q-item-label>
              {{oportunidades.descartadas}}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-btn flat color="primary" label="VER TODAS OPORTUNIDADES" />
        </q-item>
      </q-card>

      <q-card class="col-6 row">
        <span class="q-pa-md text-h5 col-12">
          Limite de crédito
        </span>
        <q-item class="col-12">
          <q-item-section>
            <q-item-label style="color: #4B96F3;">
              R$ {{credito.concedido}}
            </q-item-label>
            <q-item-label>
              Concedido
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-12">
          <q-item-section>
            <q-item-label style="color: #4CAF50;">
              R$ {{credito.disponivel}}
            </q-item-label>
            <q-item-label>
              Disponível
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="col-6 row">
        <span class="q-pa-md text-h5 col-12">
          Vendas
        </span>
        <q-item class="col-12">
          <q-item-section>
            <q-item-label>
              Adicionar um gráfico aqui
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="col-6 row">
        <span class="q-pa-md text-h5 col-12">
          Títulos financeiros
        </span>
        <q-item class="col-12 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="red" text-color="white">1</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              R$ {{titulos.vencidos}}
            </q-item-label>
            <q-item-label>
              Vencidos
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="col-12 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="orange" text-color="white">2</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              R$ {{titulos.avencer}}
            </q-item-label>
            <q-item-label>
              A vencer
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="col-12 row">
          <q-item-section class="col-2" style="font-size: 2em">
            <q-chip square>
              <q-avatar color="green" text-color="white">3</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-10">
            <q-item-label>
              R$ {{titulos.pagos}}
            </q-item-label>
            <q-item-label>
              Pagos
            </q-item-label>
          </q-item-section>
        </q-item>
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
  components: {  },
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      pessoa: {
        nome: 'Fulana de Tal',
        empresa: 'Acme inc.',
        status: 'Ativo',
        contato: {
          ddd: '45',
          celular: '99555-5555',
          email: 'fulana@email.com',
        },
        social: {
          whatsapp: '',
          facebook: '',
          instagram: '',
          twitter: '',
          linkedin: '',
        },
        endereco: {
          logradouro: 'Avenida',
          rua: 'Brasil',
          numero: '4019',
          referencia: 'Trabalho',
          maps: {}
        },
        oportunidades: [
          {
            status: '',
            valor: ''
          }
        ]
      },
      oportunidades: {
        ganhas: '20.000,00',
        perdidas: '4.300,00',
        abertas: 'Diversas moedas',
        descartadas: '-'
      },
      totalOportunidades: Math.floor(Math.random() * 10),
      statusOportunidades: [
        'Ganhas',
        'Perdidas',
        'Abertas',
        'Descartadas'
      ],
      credito: {
       concedido: '12.000,20',
       disponivel: '3.105,00'
      },
      titulos: {
        vencidos: '3.105,00',
        avencer: '3.105,00',
        pagos: '3.105,00'
      }
    }
  },
}
</script>
