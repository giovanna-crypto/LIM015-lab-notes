<template>
<div>
  <div class="home">
    <img alt="Note logo" src="../assets/LogoNote.png">
    <HelloWorld msg="Welcome to Your Happy Notes App"/>
  </div>
      <section class="inputGroup">
        <p class="loginErrorMessage"></p>
        <label for="loginEmail" ></label>
        <input type="email" id="loginEmail" class="inputLogin" autofocus placeholder="Correo electronico">
        <p class="loginErrorMessage"></p>
        <label for="loginPassword" ></label>
        <input type="password" id="loginPassword" class="inputLogin" autofocus placeholder="Contraseña">
      </section>
      <p class="loginButton">
        <button id="loginFormBtn" class="allButton" type="button" ><router-link to="/about">Iniciar Sesión</router-link></button>
      </p>
      
     <p class="loginText"><HelloWorld msg="Or sign in with..."/></p>
    <img alt="Iniciar sesion Google" src= "../assets/googleIcono.png">
    <p class="registerText">Aún no tienes cuenta?
    <router-link to="/register">Registrate</router-link></p>
    </div>

</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
