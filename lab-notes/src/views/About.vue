<template>
  <div class="about">
    <h1>Crea tus Happy Notes</h1>
    <form class="d-flex justify-content-center">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="inputText" type="text"  placeholder= "Escribe una nota...">
      </div> <br>
      <button class="btn-add-note">Agregar</button>
       <!-- <div class="hello">
       <h1>{{ msg }}</h1> 
       </div>-->
    </form>
  </div>
  
</template>


<script>
/*export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ab42b9;
}
</style>
