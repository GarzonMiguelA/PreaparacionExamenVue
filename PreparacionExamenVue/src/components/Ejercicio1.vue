<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

// Recibir la prop `valorInicial` del padre
const props = defineProps({
  valorInicial: {
    type: Number, // Usamos Number para la prop
    required: true,
  },
});

// Emitir el evento `actualizar` al padre
const emit = defineEmits(['actualizar']);

// Crear una copia local reactiva del contador
const contador = ref(props.valorInicial);

// Si cambia la prop en el padre, sincronizamos el contador local
watch(() => props.valorInicial, (nuevoValor) => {
  contador.value = nuevoValor;
});

// Funciones para incrementar y decrementar
function incrementar() {
  contador.value++;
  emit('actualizar', contador.value); // Emitir el nuevo valor al padre
}

function decrementar() {
  contador.value--;
  emit('actualizar', contador.value); // Emitir el nuevo valor al padre
}
</script>

<template>
  <div>
    <h1>Ejercicio 1: Hijo</h1>
    <p>Valor actual en el hijo: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>
