<template>
  <v-banner :stacked="false">
    <div class="d-flex flex-column mb-10 bg-surface-variant w-100">
      <v-sheet class="ma-2 pa-2 text-h5">Пост пользователя: {{ post.name }}</v-sheet>
      <v-sheet class="ma-2 pa-2 text-h4">{{ post.post }}</v-sheet>

    </div>
  </v-banner>
      <v-list lines="one">
        <v-list-item
        v-for="(item, index) in post.comments"
        :key="index"
        class="border-opacity-100"
        color="error"
        >
      <v-list-item-subtitle>Коментарий</v-list-item-subtitle>
      <v-list-item-title class="text-h6">{{ item }}</v-list-item-title>

      <div class="d-flex align-center justify-end">
        <v-btn variant="tonal" @click.prevent="removeComment(index)" class="mb-2" v-if="$store.state.userRole === 'admin' || $store.state.userRole === 'user'">Удалить</v-btn>
      </div>
      <v-divider default></v-divider>

    </v-list-item>

      </v-list>

      <v-form @submit.prevent="submit" v-if="$store.state.userRole === 'admin' || $store.state.userRole === 'user'">
      <v-text-field
        label="Добавить коментарий"
        v-model="comment">
      </v-text-field>
      <v-btn type="submit" v-on:keyup.enter="submit">Отправить</v-btn>
      </v-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    id: {
      type: String, // или нужного типа
      required: true // если id обязателен
    }
  },
  data() {
      return {
          comment: null
      }
  },
  computed: {
    ...mapState(['dataArray']),

    post() {
      const postId = this.$route.params.id;
      return this.dataArray.find(post => post.id == postId);
    },
  },
  methods: {
      ...mapMutations(['addComment', 'deleteComment']),
  submit() {
    if (this.comment.trim() !== '') {
      const payload = {
        id: this.$route.params.id,
        comment: this.comment.trim()
      };
      this.addComment(payload);
      this.comment = '';
    }
  },
  removeComment(commentIndex) {
  const postId = this.$route.params.id;
  this.deleteComment({ postId, commentIndex });
  }
}
};
</script>
