<template>
  <form @submit.prevent="submit">
  <v-textarea
    :no-resize="true"
    placeholder="Введите текст"
    rows="7"
    v-model='message' v-on:keyup.enter="submit"
    ></v-textarea>
    <v-btn type="submit">Отправить</v-btn>

  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            comments: null,
            name: '',
            message: '',
            id: 1,
        }
    },
    methods: {
        ...mapMutations(['addToDataArray']),
      submit() {
        if (this.message.trim() !== '') {

          this.addToDataArray({name: this.$store.state.nickName, post: this.message, id: this.id, comments: [] });
          this.id++
          this.name = ''
          this.message = '';
        }
      } ,
    }
}
</script>
