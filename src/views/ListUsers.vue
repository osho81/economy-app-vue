<script lang="ts">

// Syntax for import ts is slightly different; quick Z_FIXED, ts-ignore: 
// @ts-ignore
import { getUsers } from '@/service/userService.js';

// Get UsersList using export approach (i.e. instead of script setup)
// & mounted() lifecycle hook
export default {
    data() {
        return {
            usersList: []
        }
    },
    mounted() {
        getUsers()
            .then((response: { data: never[]; }) => {
                this.usersList = response.data
            })
    }
}


</script>

<template>
    <h2>Here will the users be displayed!</h2>
</template> 


<style scoped></style>