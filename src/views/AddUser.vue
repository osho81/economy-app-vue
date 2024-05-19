<script setup lang="ts">

import router from '@/router';

import User from '@/models/User';
import { ref } from 'vue';
import { createUser } from '@/service/userService';

// Handle inputs
const firstNameVal = ref(); // use values for submit method
const lastNameVal = ref();
const emailVal = ref();
const userNameVal = ref();
const passwordVal = ref();

const handleFirstName = (event: any) => {
    const currentInput = event.currentTarget.value;
    firstNameVal.value = currentInput;
    console.log(firstNameVal.value); // Prints out current state of firstName ref value
}
const handleLastName = (event: any) => {
    const currentInput = event.currentTarget.value;
    lastNameVal.value = currentInput;
    console.log(lastNameVal.value);
}
const handleUserName = (event: any) => {
    const currentInput = event.currentTarget.value;
    userNameVal.value = currentInput;
    console.log(userNameVal.value);
}
const handleEmail = (event: any) => {
    const currentInput = event.currentTarget.value;
    emailVal.value = currentInput;
    console.log(emailVal.value);
}
const handlePassword = (event: any) => {
    const currentInput = event.currentTarget.value;
    passwordVal.value = currentInput;
    console.log(passwordVal.value);
}

const submitCreateUser = (event: any) => { // Event not necessary

    // // pass in values of user to create
    // let userToCreate = {
    //     firstName: firstNameVal.value, lastName: lastNameVal.value,
    //     userName: userNameVal.value, email: emailVal.value, password: passwordVal.value
    // }; // keep password as is in backend

    // Alternative, using imported "mirroring" model/entity User
    console.log(firstNameVal.value);
    let userToCreate = new User(firstNameVal.value, lastNameVal.value, userNameVal.value, emailVal.value, passwordVal.value); 

    createUser(userToCreate).then((response) => {
        console.log(response);
    })

    // Go to list users after user is created
    router.push('/listusers')

}


</script>

<template>
    <div class="p-8 ml-[30%] w-[40%]">
        <h2 class="text-center font-semibold text-lg">Create User</h2>
        <table className='table text-base space-x-4'>
            <tbody id='goal-details-table'>
                <tr>
                    <td className='pb-4 m-0 font-semibold'>First name </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleFirstName($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0 font-semibold'>Last name </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleLastName($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0 font-semibold'>Email </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleEmail($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0 font-semibold'>Username </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handleUserName($event)" />
                    </td>
                </tr>
                <tr>
                    <td className='pb-4 m-0 font-semibold'>Password </td>
                    <td className='p-0 m-0 text-right'>
                        <input type="text"
                            className="input input-sm input-bordered w-full max-w-xs font-semibold text-right"
                            @input="handlePassword($event)" />
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-center items-center p-5">
            <button className="btn btn-outline mr-4" @click="router.go(-1)">Cancel</button>
            <button className="btn btn-outline" @click="submitCreateUser($event)">Save</button>
        </div>
    </div>
</template>

<style></style>