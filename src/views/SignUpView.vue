<script setup>
import { advancePositionWithClone } from "@vue/compiler-core";
import TheWelcome from "../components/TheWelcome.vue";

const router = inject('router');

const member = reactive({
  fullname: "Bernard TEST",
  email: "test@test.fr",
  password: "test",
});

function validerFormulaire() {
  api.post("members", { body: member }).then((response) => {
    if (response.message) {
      alert(response.message);
    } else {
      console.log(response);
      if (confirm("Votre compte a été créé. Voulez-vous vous connecter ? ")) {
                // rediriger vers la route /se-connecter
                router.push('/login');
            }
    }
  });
}
</script>

<template>
  <div class="columns">
      <div class="column is-6 is-offset-3">

          <h1 class="title">Sign up</h1>

          <form class="box" @submit.prevent="validationFormulaire">
              <div class="field">
                  <label class="label">Name </label>
                  <input class="input" v-model="member.fullname" type="text" placeholder="Name or username">
              </div>

              <div class="field">
                  <label class="label">E-Mail </label>
                  <input class="input" v-model="member.email" type="email" placeholder="email@domaine.com">
              </div>

              <div class="field">
                  <label class="label">Password </label>
                  <input class="input" v-model="member.password" type="password">
              </div>

              <div class="field">
                  <label class="label">Confirm Password </label>
                  <input class="input" v-model="member.password" type="password">
              </div>

              <div class="field is-grouped">
                  <p class="control">
                      <button class="button is-primary">Sign up</button>
                  </p>
                  <p class="control">
                      <router-link to="/login" class="button">Cancel</router-link>
                  </p>
              </div>
          </form>
      </div>
  </div>

</template>
