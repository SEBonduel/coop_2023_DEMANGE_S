<script setup>
import PosterMessage from '@/components/PosterMessage.vue'
import Message from '@/components/Message.vue'

import { onMounted, ref, inject, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useSessionStore } from '../stores/session';

const route = useRoute();
const session = useSessionStore();
const state = reactive({
    channel : []
})
async function chargerConversation() {
    const response = await api.get(`channels/${route.params.id}?token=${session.data.token}`);
    state.channel = response;   
}

async function chargerMessages() {
    // state.messages = [];
    const response = await api.get(`channels/${route.params.id}/posts?token=${session.data.token}`);
    state.messages = response.reverse();
    setTimeout(() => bus.emit('fin-recharger-messages'), 10);
}

onMounted(() => {
    if (session.isValid()) {
        chargerConversation();
        chargerMessages();
    }
});

</script>
<template>
    <div v-if="state.channel.id">
        <h1 class="convoview">{{ state.channel.topic }}</h1>
        <p class="subtitle">{{ state.channel.label }}</p>
        <div class="liste-messages">
            <template v-for="message in state.messages">
                <message :message="message"></message>
            </template>
        </div>
        <poster-message :cid="state.channel.id"></poster-message>
    </div>
</template>

<style scoped>

 /* Hide scrollbar for Chrome, Safari and Opera */
 body::-webkit-scrollbar {
  display: none;

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

div.box{
    display: flex;
    color:white;
}

p.subtitle{
    text-align: center;
    font-size: 24px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.liste-messages {
    margin-bottom: 5vh;
}

.liste-messages {
    display: flex;
    flex-direction: column;
}

.liste-messages .box {
    margin: 0;
}

p{
    color:white;
}

nav{
  width:100%;
  color:white;
  position: fixed;
  background-color: rgb(23, 23, 23);
  display: flex;
  justify-content: left;
  padding:1.5em;
  top:0;
  text-decoration: none;
  gap: 2rem;
}

h1.convoview{
    color:white;
    padding-top:2em;
}

a,a:visited{
  color:white;
}

</style>