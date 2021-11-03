<template>

<!-- ////////// formulario Añadir ////////// -->
    <!-- Titulo -->
  <div class="container my-4">
  <form>  
    <img alt="Note logo" src="../assets/LogoNote.png">
    <h1>Crea tus Happy Notes</h1>
    <div class="input-group mb-3">
    <span class="input-group-text">Titulo</span>
    <input v-model="nota.titulo" type="text" class="form-control">
    </div>
    <!-- Contenido -->
    <div class="input-group mb-3">
    <span class="input-group-text">Contenido</span>
    <input v-model="nota.contenido" type="text" class="form-control">
    </div>
    <!-- Botone Guardar -->
    <div class="mt-3">  
    <button @click.prevent="agregarDato()" 
            class="btn btn-primary">Guardar
    </button>
    </div>
  </form>
<div>
  <Navbar/>
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Titulo</th>
        <th scope="col">Contenido</th>
        <th scope="col">ID</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in notas" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.titulo}}</td>
        <td>{{item.contenido}}</td>
        <td>{{item.id}}</td>
        <td>
         <button @click.prevent="eliminarDato(item.id)" 
            class="btn btn-danger">Eliminar
         </button>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
</div>
</template>
<script>
import Navbar from '../components/Navbar'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db } from '@/firebase/config.js'


export default {
  name: 'About',
  components: {
    Navbar
  },
  data() {
    return {
      notas: [],
      nota:{
        titulo: '',
        contenido: ''
      }
    }
  },
  methods:{
  // GET / OBTENER / Consulta instantánea 
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "notas"));
        querySnapshot.forEach((doc) => {
        let nota = doc.data()
        nota.id = doc.id
        this.notas.push(nota)
        console.log(nota)
      });
    },
    // Añadir en methods
// ADD / AGREGAR / AÑADIR
async agregarDato(){
  const docRef = await addDoc(collection(db, "notas"), {
    titulo: this.nota.titulo,
    contenido: this.nota.contenido
  })
    .then(() => {
      console.log("Documento añadido");
    })
    .catch(function(error) {
      console.error("Error al añadir el documento: ", error);
    });
    console.log(docRef);
},
  },
    mounted() {
      this.obtenerDatos();
    },
}
</script>