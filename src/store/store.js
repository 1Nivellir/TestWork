
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      dataArray: [],
      userRole: null,
      nickName: 'Авторизуйтесь',
    };
  },
  actions: {
    loginAsUser(context, payload) {
      context.commit('setUserRole', payload);
    },
    logout({ commit }) {
      commit('setUserRole', null);
      commit('setNickName', null)
    },
    setName(context, payload) {
      context.commit('setNickName', payload)
    }
  },
  mutations: {
    setUserRole(state, role) {
      state.userRole = role;
    },
    setNickName(state, name) {
      state.nickName = name
    },
    addToDataArray(state, payload) {
      state.dataArray.push(payload)
    },
    addComment(state, payload) {
      const postId = payload.id;
      const postToUpdate = state.dataArray.find(item => item.id == postId);
      const newComment = payload.comment;
      postToUpdate.comments.push(newComment);
    },
    deleteComment(state, payload) {
      const postId = payload.postId;
      const commentIndex = payload.commentIndex; // индекс комментария для удаления

      const postToUpdate = state.dataArray.find(item => item.id == postId);

      if (postToUpdate) {
        console.log(commentIndex);
        if (commentIndex !== -1 && commentIndex < postToUpdate.comments.length) {
          postToUpdate.comments.splice(commentIndex, 1); // Удаляем комментарий по индексу из массива комментариев поста
        }
      }
    }
  },
});

export default store;
