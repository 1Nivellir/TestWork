

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


    </v-navigation-drawer>
    <v-app-bar style="display: flex; align-items: center; justify-content: flex-end;">

    <v-app-bar-title class="text-h5">Публикации</v-app-bar-title>
        <v-btn style="margin-right: 15px;" variant="tonal" @click.prevent="open">
              Войти
            </v-btn>
            <v-btn variant="tonal" @click.prevent="logout">
              Выйти
            </v-btn>
    </v-app-bar>

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

