<script lang="ts">
// Note: no script setup in this file

// Syntax for import ts is slightly different; quick Z_FIXED, ts-ignore: 
// @ts-ignore
import { getUsers } from '@/service/userService.js';
import type User from '@/models/User'; // Backend mirroring User
import { ref } from 'vue';
import type SavingsGoal from '@/models/SavingsGoal';

// const selectedUser = ref<User>(); // Control state

// Get UsersList using export approach (i.e. instead of script setup)
// & mounted() lifecycle hook
export default {

    data() {
        // let usersList: any[] = []; // Declare array in ts, if no User model available
        let usersList: User[] = []; // Use backend-mirroring User model 

        let selectedUser = ref<User>(); // Control state


        return { usersList, selectedUser } // This is exported to template (html component)

    },
    mounted() {
        getUsers()
            .then((response) => { // gets response.data from service getUsers
                this.usersList = response;
                // usersList1 = response;
                console.log(response);
            })
    },


    methods: {
        displayGoals: function (event) { // js
            // alert(`Hello ${selectedUser.value}!`)
            // `event` is the native DOM event

            this.usersList.map((user) => {
                // console.log(user.userName);
                // console.log(event.currentTarget.id);
                if (user.userName === event.currentTarget.id) {
                    console.log("Hit!");
                    // selectedUser.value = Object.assign(user);
                    // selectedUser.value = user; // ref approach
                    this.selectedUser = user; // data() approach
                    console.log(typeof this.selectedUser);
                    console.log(this.selectedUser);
                    // return selectedUser.value; // ref approach?
                }

            })

            if (event) { // Optional if, but leave it here for now
                window.diplaygoalsdiv.showModal();
            }

        

        }
    }


}




</script>

<template>
    <div className='m-6 pt-10 sm:p-10'>

        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead className='text-xs p-0 m-0 space-x-0 sm:text-sm'>
                    <tr>
                        <th className='p-0 m-0'>User
                            <span id='fName' className='ml-1 text-[8px] sm:ml-6 sm:text-xs' onclick={{sortTable}}>
                                First name
                                <FontAwesomeIcon icon={regNrArrow} className="not-clickable-part ml-1" />
                            </span>
                            <span id='lName' className='ml-1 text-[8px] sm:ml-6 sm:text-xs' onclick={{sortTable}}>
                                Last name
                                <FontAwesomeIcon icon={modelBrandArrow} className="not-clickable-part ml-1" />
                            </span>
                        </th>
                        <th className='p-0 m-0'>
                            <span id='email' onclick={{sortTable}}>
                                Email
                                <FontAwesomeIcon icon={typeArrow} className="not-clickable-part ml-1" />
                            </span>
                        </th>
                        <th className='p-0 m-0'>
                            <span id='userName' onclick={{sortTable}}>
                                User name
                                <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                            </span>
                        </th>
                        <th className='p-0 m-0'>
                            <span id='password' onclick={{sortTable}}>
                                Password
                                <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                            </span>
                        </th>
                        <th>Actions</th>
                        <th>GOALS</th>
                    </tr>
                </thead>


                <tbody className='text-[8px] p-0 m-0 space-x-0 sm:text-sm'>
                    <!-- Loop through fetched usersList and display in table:  -->
                    <tr v-for="(user, i) in usersList" :key="i">
                        <td className='p-0 m-0'>

                            <div className="font-semibold flex">
                                <!-- <div className="font-semibold space-x-6"> {{user.firstName.toUpperCase() + "&emsp;&emsp;&emsp;&emsp; " + user.lastName.toUpperCase()}}</div> -->
                                <div className="w-[40%]"> {{ user.firstName.toUpperCase() }}</div>
                                <div> {{ user.lastName.toUpperCase() }}</div>

                            </div>

                        </td>
                        <td className='p-0 m-0'> {{ user.email }} </td>
                        <td className='p-0 m-0'> {{ user.userName }} </td>
                        <td className='p-0 m-0'> {{ user.password }} </td>
                        <td className='p-0 pb-2 m-0'>
                            <span className='user-detail-btn ml-4' :id="user.userName" @click="displayGoals($event)">
                                <font-awesome-icon icon="circle-info" size="xl" />

                            </span>
                        </td>

                    </tr>



                </tbody>

                <!-- <div v-for="(SavingsGoal, i) in Object.entries(selectedUser.savingsGoals)" :key="i"> -->
                <!-- <div v-for="(SavingsGoal, i) in selectedUser" :key="i"> -->
                <!-- <div v-if="selectedUser">
                    <p className='p-0 m-0'> Should go here: </p>
                    <p className='p-0 m-0'> {{ selectedUser }} </p><br>
                    <p className='p-0 m-0'>----------------------------------------------------------</p>
                    <p className='p-0 m-0'> {{ selectedUser.savingGoals }} </p>
                    <br>
                    <p className='p-0 m-0'>----------------------------------------------------------</p>

                    <div v-for="SavingsGoal in selectedUser.savingGoals">
                        {{ console.log("OOOOOOOOOOOOOOK", selectedUser) }}
                        <p className='p-0 m-0'> {{ SavingsGoal }} </p>
                        <br>
                        <p className='p-0 m-0'>----------------------------------------------------------</p>
                        <p className='p-0 m-0'> {{ selectedUser.savingGoals }} </p>
                        <p className='p-0 m-0'> Yes! </p>
                    </div>
                </div> -->


                <!-- Open this modal in displayGoals method, after the method has populated it:  -->
                <dialog id="diplaygoalsdiv" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <!-- if there is a button in form, it will close the modal: -->
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>


                <!-- <tfoot className='mb-[20%] text-xs m-0 p-0 space-x-0 sm:text-sm'>
                    <tr>
                        <th>User first & last name</th>
                        <th>Email</th>
                        <th>User name</th>
                        <th>password</th>
                        <th>Actions</th>
                    </tr>
                </tfoot> -->

            </table>
        </div>
    </div>

    <!-- <button @click="open = true">Open Modal</button>

    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
    </div> -->
</template> 


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>