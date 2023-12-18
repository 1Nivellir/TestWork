<template>
  <div class="teleport-blackout"></div>
  <div class="teleport-modal">
    <div class="teleport-modal__content">
    <v-btn class="teleport-modal__close" @click.prevent="doClose">X</v-btn>
      <v-sheet width="300" class="mx-auto">
        <v-form>
          <v-text-field
            v-model="nickName"
            label="Введите ваше имя"
          ></v-text-field>
          <v-select
          :item-props="true"
          :items="payloads"
          v-model="selectedRole"
          item-title="title"
          item-value="abbr"
          >

          </v-select>
          <v-btn type="submit" block class="mt-2" @click.prevent="loginAsUserRole">Войти</v-btn>
        </v-form>
      </v-sheet>

    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
  export default {
    data: () => ({
      selectedRole: 'admin',
      nickName: '',
      payloads: [{
        title: 'Администратор',
        abbr: 'admin'
      },{
        title: 'Пользователь',
        abbr: 'user'
      },{
        title: 'Гость',
        abbr: 'guest'
      }]
    }),
    props: {
        open: {type: Boolean}
    },
    methods: {
        ...mapActions(['loginAsUser', 'setName']),
        loginAsUserRole(){
        this.loginAsUser(this.selectedRole)
        this.setName(this.nickName)
        this.$emit('update:open', false)
        },
        onOutsideClick($event) {
            if($event.target !== this.$refs.content && $event.target.contains(this.$refs.content)) {
                this.doClose()
            }
        },
        doClose() {
            this.$emit('update:open', false)
        },
    }
  }
</script>
<style>
.teleport-blackout {
  z-index: 1010;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background-color: #000;
}
.teleport-modal {
  z-index: 1010;
  overflow: auto;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
}
.teleport-modal__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-width: 500px;
  min-height: 200px;
  font-size: 36px;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
  background-color: #fff;

  border-radius: 15px;
}

.teleport-modal__close {
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 10px;
  line-height: 1;
}


</style>
