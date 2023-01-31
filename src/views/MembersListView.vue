<script setup>
import { ref, onMounted, inject } from 'vue';
import { useMembresStore } from '@/stores/members'

const membresStore = useMembresStore();
</script>

<template>
  <main>
    <h1>Liste des membres</h1>
    <ul id="members">
      <li class="membre" v-for="membre in membresStore.state.membres">
        <router-link :to="{name:'membre', params : {id : membre.id}}">
          <h2>{{ membre.fullname }}</h2>
          <p class="subtitle">{{ membre.email }}</p>
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

a{
    color: rgb(143, 114, 101);
    font-weight:thaoma;
}

h1{
  color:white;
  padding-top:2em;
}

.membre {
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20em;
  width: 20em;
  background: rgb(48, 47, 47);
  border-radius: 15px;
  margin:10px;
  transition: all 0.2s ease;
}
li.membre:hover{
  box-shadow: 0 0 2rem rgb(39, 164, 15);
}

.membre > .membre-information {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.membre > .membre-information > h2 {
  margin-bottom: 1em;
}

.membre > .membre-information + .membre-btn {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.membre > .membre-information + .membre-btn button {
  color: #f1f1f1;
  padding: 0.7em;
  width: 8em;
  font-weight: bold;
  background-color: #d6b8c0;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(141, 188, 116, 0.1);
  transition: border-color 0.3s ease-in-out;
}

.membre > .membre-information + .membre-btn button:hover {
  border-color: #f77017;
} 
#members{
  margin-right:4%;
  margin-top:4%;
  display: flex;
  flex-direction:row ;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap:2em;
}

a,a:visited{
  color:white;
}

</style>