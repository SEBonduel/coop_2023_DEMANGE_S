<script setup>
//import TheWelcome from '../components/TheWelcome.vue'

import { ref, onMounted } from 'vue';
import { useSessionStore } from '@/stores/session'

const session = useSessionStore();

let channels = ref([]);

onMounted(() => {
  if (session.isValid()) {
    console.log('Nous pouvons travailler');

    api.get(`channels?token=${session.data.token}`).then(response => {
      channels.value = response;
    })
  }
})
</script>

<template>
  <main>
    <!--    <TheWelcome />-->
    <!--    <Navbar />-->

    <h2 class="title">Conversation list</h2>
    <p class="subtitle">
      <router-link to="/createConversation">Create new conversation</router-link>
    </p>
    
    <ul>
      <li class="box" v-for="channel in channels">
        <router-link :to="{name:'conversation', params : {id : channel.id}}">
        <h2 class="title is-3">{{ channel.topic }}</h2>
        <p class="subtitle">{{ channel.label }}</p>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<style>
body{
  margin:0;
}
nav{
  background-color:rgb(48, 47, 47);
}

</style>
