<script setup lang="ts">

// Props/msg is sent in via App.vue or other routing
// In this case, props is sent in router.push... from ListUsers
defineProps<{ // TS syntax
    username: string
}>()

import router from '@/router';

import type User from '@/models/User';
import { ref } from 'vue';
import { getByUsername } from '@/service/userService';

const selectedUser = ref<User>(); // Control state
const firstNameVal = ref(); // Control state


getByUsername("johndoe").then((response) => {
    console.log(response);
    selectedUser.value = response;
})


const handleFirstName = (event) => {
    const firstNameValue = event.currentTarget.value;
    firstNameVal.value = firstNameValue;
    console.log(firstNameValue); // Prints out current target value
    console.log(firstNameVal.value); // Prints out current state of firstName ref value

}

const submitEditUser = (event) => {
    // A service method to post/put user
} 


</script> 

<template>
    <div class="p-8 ml-[20%] w-[60%]">
        <h2 class="text-center font-bold text-lg">Edit user fields</h2>
        <table className='table text-base space-x-4'>
            <tbody id='goal-details-table'>
                <tr>
                    <td className='pb-4 m-0'>First name </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text" :placeholder="selectedUser?.firstName"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleFirstName($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0'>Last name </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text" :placeholder="selectedUser?.lastName"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0'>Username </td>
                    <td className='p-0 m-0 text-right'>
                        <input disabled type="text" :placeholder="selectedUser?.userName"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0'>Email </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text" :placeholder="selectedUser?.email"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0'>Password </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text" :placeholder="selectedUser?.password"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-center items-center p-5">
            <button className="btn mr-4" @click="router.go(-1)">Cancel</button>
            <button id={selectedOrder.id} className="btn btn-outline" @click={submitEditUser}>Edit</button>
        </div>
    </div>
</template> 

<style scoped></style>