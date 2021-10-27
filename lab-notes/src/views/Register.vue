<template>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <h1>Registrate en Happy Notes!</h1>
    <img alt="Note logo" src="../assets/LogoNote.png"><br><br>
    <form @submit.prevent="pressed">
    <br>
      <section class="inputGroupRegister">
        <div class="name">
        <input type="text" id="registerName" class="formRegister" autofocus="autofocus"
        placeholder="Nombre" >
        </div>
        <br>
        <div class="email">
        <input type="email" v-model="email" placeholder="email">
        </div>
        <br>
        <div class ="password">
        <input type="password" v-model="password" placeholder="Contraseña">
        </div>
        <br>
        <div class ="repite password">
        <input type="password" v-model="password" placeholder="Contraseña">
        </div>
        <br>
        <button type="submit">Registrarse</button>
      <p class="registerText">Ya tienes cuenta?
        <router-link to="/">Inicia Sesión</router-link>
      </p>
    </section>
  </form>
  </div>
</template>

<script>
 import firebase from 'firebase/app'
//import { auth } from "./firebase/config"
//import firebase from 'firebase'
//import * as firebase from "firebase/app";
//import "firebase/auth";
export default {
  methods: {
    async pressed(){
      try {

      const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(user)
      this.$router.replace({name:"secret"});
      }catch(err){
        console.log(err)

      }
    }

  },
  data() {
    return {
      email:"",
      password:"",
      error: ""
    }
  }
}
</script>