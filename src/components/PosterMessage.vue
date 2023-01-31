<script setup>
import { ref, defineProps, inject } from 'vue';
const props = defineProps(['cid'])
const session = inject('session');
const bus = inject('bus');

let message = ref('')

function envoyerMessage() {
    let body = {
        channel_id : props.cid,
        member_id : session.data.member.id,
        message : message.value
    }
    console.log(body);

    api.post(`channels/${props.cid}/posts?token=${session.data.token}`,{
        body
    }).then(response => {
        message.value='';
        bus.emit('recharger-messages');
    });

}
</script>

<template>
    <form @submit.prevent="envoyerMessage">
        <div class="field">
            <div>
                <input class="input" placeholder="Rédigez votre message" v-model="message">
            </div>
            <div>
                <button class="button">
                    Envoyer
                </button>
            </div>
        </div>
    </form>
</template>

<style>

</style>

<style scoped>

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
  display: none;

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


form {
    text-align: center;
    --marge : 1rem;
    position: fixed;
    bottom: var(--marge);
    right: var(--marge);
    left: var(--marge);
}

input.input{
    display: flex;
    margin:1em;
    width:400px;
    height:25px;
   
}

.field{
    display: flex;
    justify-content: center;
    align-items: center;
}
.button {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.button:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.button:active {
    color: #000
}

.button:active:after,a.button:active:after {
    background: transparent;
}

.button:hover:before,a.button:hover:before {
    opacity: 1;
}

.button:after,a.button:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}


</style>