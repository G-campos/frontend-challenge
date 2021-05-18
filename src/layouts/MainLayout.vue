<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
     <q-list padding>
      <q-item clickable v-ripple @click="$router.push('/')">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>

        <q-item-section>
          Inicio
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple @click="$router.push('/cadastro')">
        <q-item-section avatar>
          <q-icon name="mdi-account-plus" />
        </q-item-section>

        <q-item-section>
          Cadastro
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple @click="$router.push('/resumo')">
        <q-item-section avatar>
          <q-icon name="mdi-account-details" />
        </q-item-section>

        <q-item-section>
          Resumo
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple @click="$router.push('/sobre')">
        <q-item-section avatar>
          <q-icon name="mdi-book-information-variant" />
        </q-item-section>

        <q-item-section>
          Sobre
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      miniState: true
    }
  }
}
</script>
