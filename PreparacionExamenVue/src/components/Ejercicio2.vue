
<script setup>
import { ref } from 'vue';

   const props = defineProps({
    tareas: {
        type: Array,
        required: true
    }
   });

   const emits = defineEmits(['update:tareas'])
   const nuevaTarea = ref('');

   const agregarTareas = () => {
     if (nuevaTarea.value.trim() !== '') {
         tareas.value.push(nuevaTarea.value);  // Agregar la tarea a la lista
         nuevaTarea.value = '';  // Limpiar el campo de entrada
     }
   };



</script>

<template>
    <div>
    <h2>Añadir Tarea (Hijo)</h2>
    
    <input v-model="nuevaTarea" type="text" placeholder="Nueva tarea" />
    <button @click="agregarTarea">Agregar</button>
  </div>
</template>