<script setup>
import { useRouter } from 'vue-router';
import { useSessionStore } from './stores/session';
import { useMembresStore } from './stores/members';
import mitt from 'mitt';
import { onMounted } from 'vue';


provide('router', useRouter());
provide('session', useSessionStore());
const membresStore = useMembresStore();
const bus = mitt();
provide('bus',bus);
onMounted(()=>{
  membresStore.chargerMembres()
})


</script>

<template>
  <nav>
    <RouterLink to="/"> Accueil </RouterLink>
    <RouterLink to="/members"> Liste des membres </RouterLink>
    <RouterLink to="/signup"> Créer un compte </RouterLink>
  </nav>
 

  <RouterView />
</template>

<style scoped>
</style>
