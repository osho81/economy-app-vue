<script setup lang="ts">

// Props/msg is sent in via App.vue or other routing
// In this case, props is sent in router.push... from ListUsers
// defineProps<{ // TS syntax
//     username: String
// }>()
const props = defineProps({
    username: String
})


import router from '@/router';

import type User from '@/models/User';
import { onMounted, ref } from 'vue';
import { getByUsername, updateUser } from '@/service/userService';

// Approach with script setup, without export default syntax

const initialUsername = ref(props.username); // Set initial username string
const selectedUser = ref<User>(); // Control state

getByUsername(initialUsername.value).then((response) => { // Use initial username string from ref-VALUE
    console.log(response);
    selectedUser.value = response;
})


// Handle inputs
const firstNameVal = ref(); // use values for submit method
const lastNameVal = ref();
const emailVal = ref();
const passwordVal = ref();

const handleFirstName = (event: any) => {
    const currentInput = event.currentTarget.value;
    firstNameVal.value = currentInput;
    // console.log(firstNameVal.value); // Prints out current state of firstName ref value
}
const handleLastName = (event: any) => {
    const currentInput = event.currentTarget.value;
    lastNameVal.value = currentInput;
    // console.log(lastNameVal.value); 
}
const handleEmail = (event: any) => {
    const currentInput = event.currentTarget.value;
    emailVal.value = currentInput;
    // console.log(emailVal.value); 
}

const submitEditUser = (event: any) => { // Event not necessary
    console.log(firstNameVal.value);
    console.log(lastNameVal.value);
    console.log(emailVal.value);

    const currentUsername = event.currentTarget.id; // id is set to selectedUser username
    console.log(currentUsername);


    let userToUpdate = { id: 2, firstName: firstNameVal.value, lastName: lastNameVal.value, 
        userName: currentUsername, email: emailVal.value }; // keep password as is in backend

    updateUser(userToUpdate).then((response) => {  
        // console.log(response);
    })

}


</script> 

<template>
    <div class="p-8 ml-[30%] w-[40%]">
        <h2 class="text-center font-bold text-lg">Edit user fields for {{ selectedUser?.userName }}</h2>
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
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleLastName($event)" />
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
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleEmail($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0'>Password </td>
                    <td className='p-0 m-0 text-right'>
                        <input disabled type="text" :placeholder="selectedUser?.password"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-center items-center p-5">
            <button className="btn mr-4" @click="router.go(-1)">Cancel</button>
            <button :id="selectedUser?.userName" className="btn btn-outline" @click="submitEditUser($event)">Edit</button>
        </div>
    </div>
</template> 

<style scoped></style>