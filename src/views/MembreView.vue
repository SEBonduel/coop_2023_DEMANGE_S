<script setup>
import { useMembresStore } from '../stores/members';
import router from '../router';
const props = useMembresStore();
const id = router.currentRoute.value.params.id;
const member = reactive (props.state.membres.find(x=>x.id==id))
console.log(member);
</script>

<template>
    <div class="membre">
        <div class="membre-information">
            <h2>{{member.fullname}}</h2>
            <p>{{member.email}}</p>
        </div>
    </div>
</template>



<style>

 /* Hide scrollbar for Chrome, Safari and Opera */
 body::-webkit-scrollbar {
  display: none;

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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

h2,p{
    color: rgb(255, 255, 255);
    font-weight:thaoma;
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



nav{
  width:100%;
  position: fixed;
  background-color: rgb(23, 23, 23);
  display: flex;
  justify-content: left;
  padding:1.5em;
  top:0;
}

nav.a{
  display: flex;
  justify-content: space-evenly;
  
}


a,a:visited{
  color:white;
}

div.membre{
 margin-left:38%;
 margin-top:200px;
}

</style>