<template>
<q-page class="flex flex-center row">
  <section class="col-sm-12 col-md-6 row">
    <q-card class="col-6 row">
      <span class="q-pa-md text-h5">Informações gerais</span>
      <q-item class="row col-12">
        <div class="q-pr-sm">
          <q-avatar size="80px">
            <img :src="pessoa.foto">
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
      <div v-for="contato in pessoa.contato" :key="contato.descricao" class="row col-12">
        <q-item class="col-12">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-phone" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              <a :href="'tel:'+ contato.telefone">{{contato.telefone}}</a>
            </q-item-label>
            <q-item-label>
              Telefone
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-12">
          <q-item-section class="col-1" style="font-size: 2em">
            <q-icon name="mdi-email" />
          </q-item-section>
          <q-item-section class="col-11">
            <q-item-label>
              <a :href="'mailto:'+ contato.email">{{contato.email}}</a>
            </q-item-label>
            <q-item-label>
              Email
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
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
    <!-- GO mapa -->
    <q-card class="col-6 row">
      <span class="q-pa-md text-h5 col-12">Local</span>
        <span>aqui vai um mapa</span>
      <q-item class="row col-12" v-for="endereco in pessoa.endereco" :key="endereco.referencia">
        <q-item-section class="col-1" style="font-size: 2em">
          <q-icon name="mdi-map-marker" />
        </q-item-section>
        <q-item-section class="col-11">
          <q-item-label>
            {{endereco.logradouro + ' ' +endereco.rua }}, {{endereco.numero}}
          </q-item-label>
          <q-item-label>
            {{endereco.referencia}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
    <!-- GO oportunidades -->
    <q-card class="col-6 row">
      <div class="col-12 row q-pt-md q-pl-md">
        <span class="text-h5 col-10 q-pr-md">
          Oportunidades ({{totalOportunidades}})
        </span>
        <q-btn flat round icon="mdi-information" class="col-2 q-pr-md"/>
      </div>
      <q-item class="col-6 row">
        <q-item-section class="col-2" style="font-size: 2em">
          <q-chip square>
            <q-avatar color="green" text-color="white">{{totalOportunidades}}</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-10 q-pl-sm">
          <q-item-label>
            {{statusOportunidades[0]}}
          </q-item-label>
          <q-item-label>
            R$ <!-- {{oportunidades.ganhas}} -->
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-6 row">
        <q-item-section class="col-2" style="font-size: 2em">
          <q-chip square>
            <q-avatar color="red" text-color="white">{{totalOportunidades}}</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-10 q-pl-sm">
          <q-item-label>
            {{statusOportunidades[1]}}
          </q-item-label>
          <q-item-label>
            R$ <!-- {{oportunidade.perdidas}} -->
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-6 row">
        <q-item-section class="col-2" style="font-size: 2em">
          <q-chip square>
            <q-avatar color="blue" text-color="white">{{totalOportunidades}}</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-10 q-pl-sm">
          <q-item-label>
            {{statusOportunidades[2]}}
          </q-item-label>
          <q-item-label>
            <!-- {{oportunidades.abertas}} -->
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col-6">
        <q-item-section class="col-2">
          <q-chip square>
            <q-avatar color="brown" text-color="white">{{totalOportunidades}}</q-avatar>
          </q-chip>
        </q-item-section>
        <q-item-section class="col-11 q-pl-sm">
          <q-item-label>
            {{statusOportunidades[3]}}
          </q-item-label>
          <q-item-label>
            <!-- {{oportunidades.descartadas}} -->
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-btn flat color="primary" label="VER TODAS OPORTUNIDADES" />
      </q-item>
    </q-card>
    <!-- GO crédito -->
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
    <!-- GO Vendas -->
    <q-card class="col-6 row">
      <span class="q-pa-md text-h5 col-12">
        Vendas
      </span>
      <q-item class="col-12">
        <q-item-section>
          <q-item-label>
            <chart />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
    <!-- GO Titulos -->
    <q-card class="col-6 row">
      <span class="q-pa-md text-h5 col-12">
        Títulos financeiros
      </span>
      <q-item class="col-12">
        <q-item-section class="col-1 q-mr-sm">
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
        <q-item-section class="col-1 q-mr-sm">
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
        <q-item-section class="col-1 q-mr-sm">
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
        <q-item class="col-2 q-pr-sm">
          <q-item-section class="col-1 q-mr-lg">
            <q-chip square>
              <q-avatar color="brown" text-color="white">{{atividadeContador.total}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Total
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2 q-pr-sm">
          <q-item-section class="col-1 q-mr-lg">
            <q-chip square>
              <q-avatar color="red" text-color="white">{{atividadeContador.atraso}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Atraso
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-3 q-pr-xs">
          <q-item-section class="col-1 q-mr-lg">
            <q-chip square>
              <q-avatar color="blue" text-color="white">{{atividadeContador.andamento}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Andamento
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2 q-pl-xs">
          <q-item-section class="col-1 q-mr-lg">
            <q-chip square>
              <q-avatar color="orange" text-color="white">{{atividadeContador.previsto}}</q-avatar>
            </q-chip>
          </q-item-section>
          <q-item-section class="col-8">
            <q-item-label>
              Previstas
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="col-2">
          <q-item-section class="col-1 q-mr-lg">
            <q-chip square>
              <q-avatar color="green" text-color="white">{{atividadeContador.concluido}}</q-avatar>
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
import Chart from 'src/components/charts/Chart.vue'
import { QSpinnerGears, QSpinnerHourglass } from 'quasar'
export default {
  name: 'PageIndex',
  components: {
    Chart
  },
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      busca: '',
      loadingState: false,
      pessoa: {},
      oportunidades: [],
      totalOportunidades: Math.floor(Math.random() * 10),
      statusOportunidades: [
        'Ganhas',
        'Perdidas',
        'Abertas',
        'Descartadas'
      ],
      credito: {},
      titulos: {},
      atividades:[],
      atividadeContador: {
        total: 0,
        atraso: 0,
        andamento: 0,
        previsto: 0,
        concluido: 0
      },
      atividadesTipo: [
        'ligacao',
        'reuniao',
        'email',
        'almoco',
        'apresentacao'
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
      },
    }
  },
  created () {
    this.$q.loading.show({
      spinner: QSpinnerHourglass,
      spinnerColor: 'blue',
      message: 'Carregando dados'
    })
    this.getPessoa ()
  },
  methods: {
    async getPessoa () {
      await this.$axios.get('http://localhost:3000/pessoa?id=1')
        .then(response=> {
          if (response.data) {
            this.pessoa = response.data
            this.getOportunidades(this.pessoa.id)
            this.getAtividades(this.pessoa.id)
            this.getCredito ()
            this.getTitulos ()
            this.$q.notify({
              color: 'green',
              position: 'top',
              icon: 'mdi-check',
              message: 'Dados existentes!'
            })
          } else {
            console.error(response.data)
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: 'Falha ao buscar dados : ' + response.data,
              icon: 'warning'
            })
          }
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            color: 'warning',
            position: 'top',
            message: 'Falha ao buscar dados : ' + error,
            icon: 'warning'
          })
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 2000)
        })
    },
    async getOportunidades (pessoaId) {
      await this.$axios.get('http://localhost:3000/oportunidades?pessoaId=' + pessoaId)
        .then(response=> {
          if (response.data) {
            this.oportunidades = response.data
            this.$q.notify({
              color: 'green',
              position: 'top',
              icon: 'mdi-check',
              message: 'Dados existentes!'
            })
          } else {
            console.error(response.data)
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: 'Falha ao buscar dados : ' + response.data,
              icon: 'warning'
            })
          }
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            color: 'warning',
            position: 'top',
            message: 'Falha ao buscar dados : ' + error,
            icon: 'warning'
          })
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 2000)
        })
    },
    async getCredito () {
      await this.$axios.get('http://localhost:3000/credito')
        .then(response=> {
          if (response.data) {
            this.credito = response.data
            this.$q.notify({
              color: 'green',
              position: 'top',
              icon: 'mdi-check',
              message: 'Dados existentes!'
            })
          } else {
            console.error(response.data)
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: 'Falha ao buscar dados : ' + response.data,
              icon: 'warning'
            })
          }
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            color: 'warning',
            position: 'top',
            message: 'Falha ao buscar dados : ' + error,
            icon: 'warning'
          })
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 2000)
        })
    },
    async getTitulos () {
      await this.$axios.get('http://localhost:3000/titulos')
        .then(response=> {
          if (response.data) {
            this.titulos = response.data
            this.$q.notify({
              color: 'green',
              position: 'top',
              icon: 'mdi-check',
              message: 'Dados existentes!'
            })
          } else {
            console.error(response.data)
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: 'Falha ao buscar dados : ' + response.data,
              icon: 'warning'
            })
          }
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            color: 'warning',
            position: 'top',
            message: 'Falha ao buscar dados : ' + error,
            icon: 'warning'
          })
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 2000)
        })
    },
    async getAtividades (pessoaId) {
      await this.$axios.get('http://localhost:3000/atividades?pessoaId=' + pessoaId)
        .then(response=> {
          if (response.data) {
            this.atividades = response.data
            this.atividadeContador.total = this.atividades.length

            for (let index = 0; index < this.atividades.length; index++) {
              const element = this.atividades[index];
              switch (element.status) {
                case 'atraso':
                  this.atividadeContador.atraso = element.status.length
                  console.log('atraso: ' + element.status)
                  break;
                case 'andamento':
                  this.atividadeContador.andamento = element.status.length
                  console.log('andamento: ' + element.status)
                  break;
                case 'previsto':
                  this.atividadeContador.previsto = element.status.length
                  console.log('previsto: ' + element.status)
                  break;
                case 'concluido':
                  this.atividadeContador.concluido = element.status.length
                  console.log('concluido: ' + element.status)
                  break;
                default:
                  break;
              }
              /* console.log(element.status.length) */
            }
            this.$q.notify({
              color: 'green',
              position: 'top',
              icon: 'mdi-check',
              message: 'Dados existentes!'
            })
          } else {
            console.error(response.data)
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: 'Falha ao buscar dados : ' + response.data,
              icon: 'warning'
            })
          }
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          this.$q.notify({
            color: 'warning',
            position: 'top',
            message: 'Falha ao buscar dados : ' + error,
            icon: 'warning'
          })
          this.timer = setTimeout(() => {
            this.$q.loading.hide()
            this.timer = void 0
          }, 2000)
        })
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
