<script setup lang="ts">

import router from '@/router';

import type User from '@/models/User';
import { ref } from 'vue';
import { createUser } from '@/service/userService';

// Handle inputs
const firstNameVal = ref(); // use values for submit method
const lastNameVal = ref();
const emailVal = ref();
const userNameVal = ref();

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

    let userToCreate = {
        firstName: firstNameVal.value, lastName: lastNameVal.value,
        userName: userNameVal.value, email: emailVal.value
    }; // keep password as is in backend

    createUser(userToCreate).then((response) => {
        console.log(response);
    })

    // Go to list view after change
    router.go(-1);

}


</script>

<template>
    <div class="p-8 ml-[30%] w-[40%]">
        <h2 class="text-center font-bold text-lg">Create User</h2>
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
            <button className="btn btn-outline mr-4" @click="router.go(-1)">Cancel</button>
            <button :id="selectedUser?.userName" className="btn btn-outline" @click="submitEditUser($event)">Edit</button>
        </div>
    </div>
</template>

<style></style>