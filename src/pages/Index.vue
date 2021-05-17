<template>
<q-page class="flex flex-center row">
  <section class="col-sm-12 col-md-6 row">
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
          <q-btn flat round icon="mdi-whatsapp" />
          <q-btn flat round icon="mdi-facebook" />
          <q-btn flat round icon="mdi-instagram" />
          <q-btn flat round icon="mdi-twitter" />
          <q-btn flat round icon="mdi-linkedin" />
        </div>
      </div>
    </q-card>

    <q-card class="col-6 row">
      <span class="q-pa-md text-h5 col-12">Local</span>
        <!-- <TravelMap class="travel-map"/> -->
      <q-item class="row">
        <q-item-section class="col-1" style="font-size: 2em">
          <q-icon name="mdi-map-marker" />
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
        <q-btn flat round icon="mdi-information" />
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

      <q-item class="col-6">
        <q-item-section class="col-2">
          <q-chip square>
            <q-avatar color="brown" text-color="white">{{totalOportunidades}}</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-11">
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
      <q-item class="col-12">
        <q-item-section class="col">
          <q-chip square>
            <q-avatar color="red" text-color="white">1</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-11">
          <q-item-label>
            R$ {{titulos.vencidos}}
          </q-item-label>
          <q-item-label>
            Vencidos
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12">
        <q-item-section class="col">
          <q-chip square>
            <q-avatar color="orange" text-color="white">2</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-11">
          <q-item-label>
            R$ {{titulos.avencer}}
          </q-item-label>
          <q-item-label>
            A vencer
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-12">
        <q-item-section class="col">
          <q-chip square>
            <q-avatar color="green" text-color="white">3</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-11">
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
  <section class="col-sm-12 col-md-6">
    <q-card class="col-6 row">
      <span class="q-pa-md text-h5 col-12">Atividades</span>
      <q-item class="row col-12">
        <q-item-section class="">
          <q-input outlined v-model="busca" dense :loading="loadingState" label="Pesquisar...">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
      <q-card-section class="row col-12">
        <q-item class="col-2">
          <q-item-section class="col">
            <q-chip square>
              <q-avatar color="brown" text-color="white">atividades.total</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Total
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2">
          <q-item-section class="col">
            <q-chip square>
              <q-avatar color="red" text-color="white">atividades.atraso</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Em atraso
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2">
          <q-item-section class="col">
            <q-chip square>
              <q-avatar color="blue" text-color="white">atividades.andamento</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Em andamento
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2">
          <q-item-section class="col">
            <q-chip square>
              <q-avatar color="yellow" text-color="white">atividades.previstas</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Previstas
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2">
          <q-item-section class="col">
            <q-chip square>
              <q-avatar color="green" text-color="white">atividades.concluidas</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Concluídas
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section class="col-12">
        <div>
          <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 520px; max-width: 100%;">
            <q-timeline class="q-pa-sm">
              <q-timeline-entry title="Atividades em atraso" color="red">
                <div class="q-py-xs">
                  <q-item class="row col-12">
                    <q-item-section class="col-1" style="font-size: 2em">
                      <q-icon name="mdi-phone" color="red"/>
                    </q-item-section>
                    <q-item-section class="col-11">
                      <q-item-label>
                        Telefone
                      </q-item-label>
                      <q-item-label caption>
                        {{pessoa.nome}}
                      </q-item-label>
                      <q-item-label caption>
                        Em atraso por 04 dias
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-timeline-entry>
              <q-timeline-entry title="Atividades previstas" color="yellow">
                <div class="q-py-xs">
                  <q-item class="row col-12">
                    <q-item-section class="col-1" style="font-size: 2em">
                      <q-icon name="mdi-phone" color="yellow"/>
                    </q-item-section>
                    <q-item-section class="col-11">
                      <q-item-label>
                        Telefone
                      </q-item-label>
                      <q-item-label caption>
                        {{pessoa.nome}}
                      </q-item-label>
                      <q-item-label caption>
                        Em atraso por 04 dias
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-timeline-entry>
              <q-timeline-entry title="Atividades concluídas" color="green">
                <div class="q-py-xs">
                  <q-item class="row col-12">
                    <q-item-section class="col-1" style="font-size: 2em">
                      <q-icon name="mdi-phone" color="green"/>
                    </q-item-section>
                    <q-item-section class="col-11">
                      <q-item-label>
                        Telefone
                      </q-item-label>
                      <q-item-label caption>
                        {{pessoa.nome}}
                      </q-item-label>
                      <q-item-label caption>
                        Em atraso por 04 dias
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-timeline-entry>
              <q-timeline-entry title="Atividades em andamento" color="blue">
                <div class="q-py-xs">
                  <q-item class="row col-12">
                    <q-item-section class="col-1" style="font-size: 2em">
                      <q-icon name="mdi-phone" color="blue"/>
                    </q-item-section>
                    <q-item-section class="col-11">
                      <q-item-label>
                        Telefone
                      </q-item-label>
                      <q-item-label caption>
                        {{pessoa.nome}}
                      </q-item-label>
                      <q-item-label caption>
                        Em atraso por 04 dias
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-timeline-entry>
            </q-timeline>
          </q-scroll-area>
        </div>
      </q-card-section>
    </q-card>
  </section>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="add" color="primary" />
  </q-page-sticky>
</q-page>
</template>

<script>
/* import TravelMap from "./components/TravelMap"; */

export default {
  name: 'PageIndex',
  components: { /* TravelMap */ },
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      busca: '',
      loadingState: false,
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
          },
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
      },
      atividades:[
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
        {
          pessoaId:'1',
          tipo:'reuniao',
          descricao:'Reunião orçamento',
          cliente:'Abigail Fisher',
          data:'17/05/2021',
          hora:'15:00',
          status: 'prevista'
        },
        {
          pessoaId:'1',
          tipo:'email',
          descricao:'Email documentação',
          cliente:'Jeffery King',
          data:'18/05/2021',
          hora:'09:45',
          status: 'prevista'
        },
        {
          pessoaId:'1',
          tipo:'almoco',
          descricao:'Almoço coorporativo',
          cliente:'Lawrence Kelly',
          data:'18/05/2021',
          hora:'15:00',
          status: 'prevista'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'concluida'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
        {
          pessoaId:'1',
          tipo:'ligacao',
          descricao:'Ligação de agendamento da reunião',
          cliente:'Erica Collins',
          data:'12/05/2021',
          hora:'10:00',
          status: 'atraso'
        },
      ],
      atividadesTipo: [
        'ligacao',
        'reuniao',
        'email',
        'almoco',
        'apresentacao'
      ],
      atividadesStatus: [
        'total',
        'atraso',
        'andamento',
        'prevista',
        'concluida'
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.travel-map {
  height: 400px;
}
</style>
