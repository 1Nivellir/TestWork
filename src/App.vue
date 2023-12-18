

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer justify="center"
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark">
    <v-list nav>
      <v-list-item class="mb-10">
        <v-list-item class="d-flex flex-wrap ga-3">
          <v-btn variant="tonal" class="mb-12" @click.prevent="$router.push({name: 'Home'})">Главная</v-btn>
          <v-list-item prepend-icon="mdi-email" title="Избранное" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" value="supervisors">{{ $store.state.nickName }}</v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" value="clockin">Роль: {{ $store.state.userRole }}</v-list-item>

        </v-list-item>
      </v-list-item>
      <AddPost v-if="$store.state.userRole === 'admin'"/>

    </v-list>

      <template v-slot:append>
          <div class="pa-2 d-flex flex-wrap ga-5 pb-5">
            <v-btn block @click.prevent="open">
              Войти
            </v-btn>
            <v-btn block @click.prevent="logout">
              Выйти
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

  <router-view />
    </v-main>
  </v-layout>
  <ModalWIndow v-if="showModal" v-model:open="showModal"/>
</template>


<script>
import AddPost from './components/AddPost.vue';
import {mapActions} from 'vuex'
import ModalWIndow from './components/ModalWIndow.vue';
//
export default {
  components: {AddPost, ModalWIndow},
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    ...mapActions(['loginAsUser', 'logout']),
    open() {
        this.showModal = true
      },
      close() {
        this.showModal = false
      }
  }

}
</script>

