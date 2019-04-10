<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="isLoading">
      loading...
    </div>
    <div v-else>
      <div>
        <pre>
          {{allContent}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    created(){
      this.$store.dispatch('getAllContent');
      this.$store.dispatch('getAllVideoContent');
    },
    computed:{
      ...mapState(['allContent' , 'videoContent' , 'isLoading'])
    }
  }
</script>