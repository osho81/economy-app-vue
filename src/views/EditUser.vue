<script setup lang="ts">

// Props/msg is sent in via App.vue or other routing
// In this case, props is sent in router.push... from ListUsers
defineProps<{ // TS syntax
  username: string
}>()

</script> 

<template>
    <p>Hellooo {{ username }}</p>
</template> 

<style scoped>
</style>