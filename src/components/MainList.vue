
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="(item, i) in dataArray"
        :key="i"
        cols="auto"
      >
        <v-card
          class="mx-auto"
          width="344"
          variant="tonal"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ item.name }}
              </div>
              <div class="text-h6 mb-1">
                {{ item.post }}
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
              <v-btn variant="elevated" elevation="4" @click.prevent="$router.push({name: 'post', params:{id: item.id}})">Посмотреть пост</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

  import { mapState } from 'vuex';

  export default {

    computed: {
      ...mapState(['dataArray']),
    },
    methods:{
    }
  };
</script>
