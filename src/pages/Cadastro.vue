<template>
<q-page class="flex flex-center row q-pa-md">
  <div class="col-12 row q-ma-sm">
    <div class="col-10">
      <span class="text-h5">
        <q-icon name="mdi-account-plus" size="2em"/>
        Cadastro Pessoa
      </span>
    </div>
    <div class="col-2">
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </div>
  <q-form @submit="onSubmit" @reset="onReset" class="col-12 q-pl-sm q-pr-sm">
    <div class="row">
      <q-input class="col-5 q-pr-sm" outlined v-model="nome" label="Nome completo" lazy-rules :rules="rulesNome" />
      <q-input class="col-2 q-pr-sm" outlined type="date" v-model="dataNascimento" hint="Data Nascimento"/>
      <q-input class="col-5" outlined v-model="empresa" label="Empresa" lazy-rules :rules="rulesNome">
        <template v-slot:prepend>
          <q-icon name="mdi-domain"/>
        </template>
      </q-input>
      <!-- Go Endereço -->
      <div class="col-12 q-pa-sm row bg-grey-3">
        <div class="col-12 row">
          <span class="text-h6 col-11">Endereços</span>
          <q-icon name="mdi-plus-thick" class="col-1" size="1.5em" @click="inserirEndereco" color="green">
            <q-tooltip>Inserir Endereco</q-tooltip>
          </q-icon>
        </div>
        <div class="col-12 row" v-for="(endereco, index) in enderecos" :key="index">
          <q-select class="col-2 q-pt-sm q-pr-sm" v-model="endereco.logradouro" label="Logradouro" outlined type="text" option-value="descricao" option-label="descricao" :options="tiposLogradouros"/>
          <q-input  class="col-4 q-pt-sm q-pr-sm" v-model="endereco.rua" label="Rua" outlined type="text" />
          <q-input  class="col-2 q-pt-sm q-pr-sm" v-model="endereco.numero" label="Nº" outlined type="text" />
          <q-input  class="col-4 q-pt-sm q-pr-sm" v-model="endereco.bairro" label="Bairro" outlined type="text" />
          <q-input  class="col-8 q-pt-sm q-pr-sm" v-model="endereco.referencia" label="Referencia" outlined type="text" />
          <q-select class="col-3 q-pt-sm q-pr-sm" v-model="endereco.identificador" label="Identificador" outlined type="text" option-value="descricao" option-label="descricao" :options="tiposIdentificadores"/>
          <div class="col-1 q-pa-md" v-if="enderecos.length > 1">
            <q-icon @click="excluirEndereco(index)" size="2em" name="delete" color="red">
              <q-tooltip>Excluir o endereço</q-tooltip>
            </q-icon>
          </div>
        </div>
      </div>
      <!-- Go Contato -->
      <div class="col-12 q-pa-sm row bg-grey-3">
        <div class="col-12 row">
          <span class="text-h6 col-11">Contato</span>
          <q-icon name="mdi-plus-thick" class="col-1" size="1.5em" @click="inserirContato" color="green">
            <q-tooltip>Inserir Contato</q-tooltip>
          </q-icon>
        </div>
        <div class="col-12 row" v-for="(contato, index) in contatos" :key="index">
          <q-input class="col-3 q-pt-sm q-pr-sm" v-model="contato.telefone" outlined type="tel" fill-mask :mask="((contato.telefone || '') && contato.telefone.toString().length === 11)?'(##) ####-#####':'(##) #####-####'">
            <template v-slot:prepend>
              <q-icon name="mdi-phone"/>
            </template>
          </q-input>
          <q-input class="col-4 q-pt-sm q-pr-sm" v-model="contato.email" outlined type="email" >
            <template v-slot:prepend>
              <q-icon name="mdi-email"/>
            </template>
          </q-input>
          <q-input class="col-4 q-pt-sm q-pr-sm" v-model="contato.descricao" outlined type="text" label="Descrição"/>
          <div class="col-1 q-pa-md" v-if="contatos.length > 1">
            <q-icon @click="excluirContato(index)" size="2em" name="delete" color="red">
              <q-tooltip>Excluir o contato</q-tooltip>
            </q-icon>
          </div>
        </div>
      </div>
      <!-- GO Social -->
      <div class="col-12 q-pa-sm row bg-grey-3">
        <span class="text-h6 col-12">Redes Sociais</span>
        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.whatsapp" outlined type="tel" fill-mask :mask="((social.whatsapp || '') && social.whatsapp.toString().length === 11)?'(##) ####-#####':'(##) #####-####'">
          <template v-slot:prepend>
            <q-icon name="mdi-whatsapp" style="color:#25d366;"/>
          </template>
        </q-input>

        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.linkedin" outlined type="url" prefix="linkedin.com/in/">
          <template v-slot:prepend>
            <q-icon name="mdi-linkedin" style="color:#346FAA;"/>
          </template>
        </q-input>

        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.skype"  outlined type="url">
          <template v-slot:prepend>
            <q-icon name="mdi-skype" style="color:#346FAA;"/>
          </template>
        </q-input>

        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.instagram" outlined type="url" prefix="instagram.com/">
          <template v-slot:prepend>
            <q-icon name="mdi-instagram insta" />
          </template>
        </q-input>

        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.facebook"  outlined type="url" prefix="facebook.com/">
          <template v-slot:prepend>
            <q-icon name="mdi-facebook" style="color:#4072E6;"/>
          </template>
        </q-input>

        <q-input class="col-4 q-pt-sm q-pr-sm" v-model="social.twitter"   outlined type="url" prefix="twitter.com/">
          <template v-slot:prepend>
            <q-icon name="mdi-twitter" style="color:#1da1f2;"/>
          </template>
        </q-input>
      </div>
    </div>
  </q-form>
</q-page>
</template>
<script>

export default {
  name: 'Cadastro',
  data() {
    return {
      nome: null,
      dataNascimento: null,
      empresa: null,
      accept: false,
      rulesNome:[
        val => val && val.length > 0 || 'Please type something'
      ],
      tiposLogradouros: [
        { descricao: "Rua" },
        { descricao: "Avenida" },
        { descricao: "Estrada" },
        { descricao: "Praça" },
        { descricao: "Travessa" },
        { descricao: "Trecho" },
        { descricao: "Trevo" },
        { descricao: "Via" },
        { descricao: "Viela" },
        { descricao: "Vila" }
      ],
      tiposIdentificadores: [
        {
          id: 1,
          descricao: "Casa"
        },
        {
          id: 2,
          descricao: "Trabalho"
        },
        {
          id: 3,
          descricao: "Outro"
        }
      ],
      enderecos: [],
      contatos: [],
      social:{},
    }
  },
  created () {
    this.inserirContato ()
    this.inserirEndereco ()
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'warning',
          message: 'Falha ao gravar',
          icon: 'warning'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'mdi-check-all',
          message: 'Registro salvo com sucesso!'
        })
      }
    },
    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    },
    inserirContato () {
      let principal = this.contatos.length === 0;
      this.contatos.push(principal);
    },
    excluirContato (indice) {
      this.$q
        .dialog({
          title: 'Confirmação',
          message: 'Excluir o contato?',
          cancel: 'Não',
          ok: 'Sim'
        })
        .onOk(() => {
          let excluirPrincipal = this.contatos[indice].principal;
          this.contatos.splice(indice, 1);
          if (excluirPrincipal && this.contatos.length > 0) {
            this.contatos[0].principal = true;
          }
        });
    },
    inserirEndereco () {
      let principal = this.enderecos.length === 0;
      this.enderecos.push(principal);
    },
    excluirEndereco (indice) {
      this.$q
        .dialog({
          title: 'Confirmação',
          message: 'Excluir o endereço?',
          cancel: 'Não',
          ok: 'Sim'
        })
        .onOk(() => {
          let excluirPrincipal = this.enderecos[indice].principal;
          this.enderecos.splice(indice, 1);
          if (excluirPrincipal && this.enderecos.length > 0) {
            this.enderecos[0].principal = true;
          }
        });
    },
  }
}
</script>

<style lang="scss" scoped>
.insta {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285AEB 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
