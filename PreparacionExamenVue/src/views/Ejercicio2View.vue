Componente padre (Vista): Muestra la lista completa y contiene el botón para borrar todas las tareas.
<script setup>
import Ejercicio2 from '@/components/Ejercicio2.vue'
import { ref } from 'vue';

const tareas = ref([]);
const nuevaTarea = ref('');

const guardadoTareas= () => {
    if(nuevaTarea.value.trim() !== ''){
       tareas.value.push(nuevaTarea.value)
    }
}

const borrarTareas = () => {
    tareas.value = []
} 

</script>

<template>
    <div>
        <h1>Lista de tareas: </h1>
        
        <!-- Formulario para agregar nuevas tareas -->
        <form @submit.prevent="guardadoTareas">
            <label>Escribe las tareas</label>
            <input type="text" v-model="nuevaTarea">
            <button type="submit">Añadir</button>
        </form>

        <!-- Mostrar la lista de tareas -->
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">{{ tarea }}</li>
        </ul>

        <!-- Botón para vaciar la lista de tareas -->
        <button @click="borrarTareas">Vaciar Lista</button>
    </div>
    
    <!-- Componente hijo -->
    <Ejercicio2 :tareas="tareas" @update:tareas="tareas = $event" />
</template>
