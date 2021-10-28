<template>
  <div class="container">
    <h1>Registrate en Happy Notes!</h1>
    <img alt="Note logo" src="../assets/LogoNote.png"><br><br>
    <form action= "#" @submit.prevent="register(this.name, this.email, this.password, this.passwordDos)">
    <br>
      <section class="inputGroupRegister">
        <div class="field">
        <input type="text" placeholder="Nombre" v-model="name">
        </div>
        <br>
        <div class="email">
        <input type="email"  placeholder="email" v-model="email">
        </div>
        <br>
        <div class ="password">
        <input type="password"  placeholder="Contraseña" v-model="password">
        </div>
        <br>
        <div class ="repite password">
        <input type="password"  placeholder="Contraseña" v-model="passwordDos">
        </div>
        <br>
        <button type="submit">Registrarse</button>
        <div class="notification is-danger" v-if="error">
          {{error}}
        </div>
      <p class="registerText">Ya tienes cuenta?
        <router-link to="/">Inicia Sesión</router-link>
      </p>
    </section>
  </form>
  </div>
</template>

<script>
/*import '@/firebase/config'
//import { db } from '@/firebase/config.js'
import { registerUser } from '@/firebase/firebase-fn.js'*/
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordDos: '',
      error: '',
    }
  },
 name: 'Register',
  methods: {
    register() {
      /*this.error = ''
      if (this.name && this.email && this.password && this.passwordDos){
        registerUser(this.email, this.password, this.passwordDos)
        .then(user=> {
          this.name = ''
          this.email = ''
          this.password = ''
          this.passwordDos = ''
          console.log(user)
        }).catch(err => {
          this.error = err.message
        })
      }else {
        this.error = "Ingrese correctamente sus datos"
      }*/
    console.log("happyNotes");
      
    }
  }
}

//import { registerUser  } from '@/./firebase/firebase-fn.js'
//import { registerUser  } from '../firebase/firebase-fn.js';
/*import { registerUser } from "firebase/auth";
console.log (registerUser());
// import "firebase/auth";
export default {
  methods: {
    async pressed(){
      try {

      const user = registerUser(this.email, this.password)
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
}*/
</script>