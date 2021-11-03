<template>
<div>
  <div class="home">
    <img alt="Note logo" src="../assets/LogoNote.png">
    
    <h2>"Welcome to Your Happy Notes App"</h2>
    <br>
  </div>
      <section class="inputGroup">
        <p class="loginErrorMessage"></p>
        <label for="loginEmail" ></label>
        <input type="email" id="loginEmail" class="inputLogin" autofocus placeholder="Correo electronico">
        <p class="loginErrorMessage"></p>
        <label for="loginPassword" ></label>
        <input type="password" id="loginPassword" class="inputLogin" autofocus placeholder="Contraseña">
      </section>
      <br>
      <p class="loginButton">
        <button id="loginFormBtn" class="allButton" type="button" ><router-link to="/about">Iniciar Sesión</router-link></button>
      </p>
    <img alt="Iniciar sesion Google" src= "../assets/googleIcono.png">
    <p class="registerText">Aún no tienes cuenta?
    <router-link to="/register">Registrate</router-link></p>
    <Navbar ></Navbar>
    </div>

</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
