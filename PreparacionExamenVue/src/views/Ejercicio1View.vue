<script setup>
import Ejercicio1 from '@/components/Ejercicio1.vue';
import { ref } from 'vue';

// Define el valor inicial como reactivo
const valorInicial = ref(0);

// Función para actualizar el valor desde el hijo
function actualizarContador(nuevoValor) {
  valorInicial.value = nuevoValor;
}
</script>

<template>
  <div>
    <h1>Ejercicio 1: Contador</h1>
    <p>Valor actual en el padre: {{ valorInicial }}</p>
    <!-- Pasamos el valor inicial como prop y escuchamos el evento -->
    <Ejercicio1 :valor-inicial="valorInicial" @actualizar="actualizarContador" />
    <RouterLink to="/">Volver a la Home</RouterLink>
  </div>
</template>
