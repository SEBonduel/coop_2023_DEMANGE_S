<script setup>
import { inject, reactive } from 'vue'
const router = inject('router');
const session = inject('session');
let member = reactive({
    email: 'test@test.fr',
    password: 'test'
})

// if(!session.data.token){
//     router.push('/login')
//   }
//   else{
//     router.push('/')
//   }

function validationFormulaire() {
    api.post('members/signin', {
        body: member
    }).then(response => {
        if (response.message) {
            alert(response.message)
        } else {
            session.setSession(response.member, response.token);
            router.push('/');
            // console.log(session.data.token);
            // console.log(session.data.member.id);
        }
    })
}
</script>
<template>
    <div class="columns">
        <div class="column is-4 is-offset-4">

            <h1 class="title">Login</h1>

            <form class="box" @submit.prevent="validationFormulaire">

                <div class="field">
                    <label class="label">E-Mail </label>
                    <input class="input" v-model="member.email" type="email" placeholder="email@domaine.com">
                </div>

                <div class="field">
                    <label class="label">Mot de passe </label>
                    <input class="input" v-model="member.password" type="password">
                </div>
                

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary">Se connecter </button>
                    </div>
                    <div class="control">
                        <router-link to="/" class="button">Annuler</router-link><br>
                    </div>
                </div>
            </form>
            <router-link to="/signup" class="button">Créer votre compte</router-link>
        </div>
    </div>

</template>

<style>
body{
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100%; 
    position: relative;
    background-image: url("../../public/dark.jpg");
    background-repeat:no-repeat ;
    background-size:cover;
    color:white;
  

}
nav{
  width:100%;
  position: fixed;
  background-color: rgb(23, 23, 23);
  display: flex;
  justify-content: left;
  padding:1.5em;
  top:0;
  gap: 2rem;
}

nav.a{
  display: flex;
  justify-content: space-evenly;
  
}

div.createconv{
    margin-top: 100px;
}


form.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f1f1f1;
    padding: 3em;
    width: 60%;
    font-weight: bold;
    background-color: #332126;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid rgba(141, 188, 116, 0.1);
    transition: border-color 0.3s ease-in-out;
    margin:auto;
}

input.input{
    display: flex;
    margin:1em;
    width:400px;
    height:25px;
   
}

div.control{
    text-align: center;
    margin-top:10px;
}

p.control{
    text-align: center;
}

a,a:visited{
  color:white;
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