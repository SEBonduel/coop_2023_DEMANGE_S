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
    <p class="createconversation">
      <router-link to="/createConversation">Créer une nouvelle conversation</router-link>
    </p>
    
    <ul id="list1">
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

 /* Hide scrollbar for Chrome, Safari and Opera */
 body::-webkit-scrollbar {
  display: none;

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

p.subtitle:first-child{
  margin:auto;
}

li{
  list-style-type: none; 
}

li.box{
  color: #f1f1f1;
  padding: 0.8em;
  width:50%;
  list-style-type: none;
  font-weight: bold;
  background-color: #332126;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(141, 188, 116, 0.1);
  transition: border-color 0.3s ease-in-out;
  margin-bottom: 1rem;
  margin-left:20%
  
}

li.box:hover{
  background: #e58517;
    opacity : 1;
    color: #fad8d8;
    transition: 0.6s;
}

h2.title.is-3{
  text-align:center;
}

body{
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100%; 
  position: relative;
  background-image: url("../../public/dark.jpg");
  background-repeat:no-repeat ;
  background-size:cover;
}
nav{
  width:100%;
  position: fixed;
  background-color: rgb(23, 23, 23);
  display: flex;
  justify-content: left;
  padding:1.5em;
  top:0;
  text-decoration: none;
  gap: 2rem;
}

nav.a{
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin-left: 50px;
  
}

.createconversation{
  color: #f1f1f1;
  font-family: poppins;
  padding: 0.8em;
  width:fit-content;
  list-style-type: none;
  background-color: #332126;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(141, 188, 116, 0.1);
  transition: border-color 0.3s ease-in-out;
  margin-bottom: 1rem;
  position:fixed;
}
.createconversation:hover{
  background: #e58517;
    opacity : 1;
    color: #fad8d8;
    transition: 0.6s;
}


a,a:visited{
  color:white;
  text-decoration: none;
}

</style>
