<script lang="ts">
// Note: no script setup in this file

// Syntax for import ts is slightly different; quick Z_FIXED, ts-ignore: 
// @ts-ignore
import { getUsers } from '@/service/userService.js';
import type User from '@/models/User'; // Backend mirroring User
import { ref } from 'vue';

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
                window.diplayGoalsDiv.showModal(); // See global declaration in main ts
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
                    </tr>
                </thead>


                <tbody className='text-[8px] p-0 m-0 space-x-0 sm:text-sm'>
                    <!-- Loop through fetched usersList and display in table:  -->
                    <tr v-for="(user, i) in usersList" :key="i">
                        <td className='p-0 m-0'>
                            <div className="font-semibold flex">
                                <div className="w-[40%]"> {{ user.firstName.toUpperCase() }}</div>
                                <div> {{ user.lastName.toUpperCase() }}</div>
                            </div>
                        </td>
                        <td className='p-0 m-0'> {{ user.email }} </td>
                        <td className='p-0 m-0'> {{ user.userName }} </td>
                        <td className='p-0 m-0'> {{ user.password }} </td>
                        <td className='flex p-0 pb-2 m-0'>
                            <span className='user-detail-btn ml-4' :id="user.userName" @click="displayGoals($event)">
                                <font-awesome-icon icon="circle-info" size="xl" />
                            </span>
                            <span className='edit-user-btn ml-4' :id="user.userName" @click="editUser($event)">
                                <font-awesome-icon icon="pen-to-square" size="xl" />
                            </span>
                        </td>

                    </tr>

                </tbody>


                <!-- Open this modal in displayGoals method, after the method has populated it  -->
                <!-- selectedUser is object; selectedUser.SavingGoals is an array in this object   -->
                <dialog id="diplayGoalsDiv" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h2 className="text-center text-lg mb-2 font-bold">{{ selectedUser?.userName }}</h2>
                        <div v-if="selectedUser">
                            <div v-for="savingsGoal in selectedUser.savingGoals">
                                <br>
                                <p className='p-0 mb-2 text-center font-semibold'>
                                    --------- {{ savingsGoal.goalName }} ---------</p>
                                <table className='table table-zebra text-xs'>
                                    <tbody id='goal-details-table'>
                                        <tr>
                                            <td className='p-0 m-0'>Current cach amount</td>
                                            <td className='p-0 m-0'> {{ savingsGoal.currentAmountOfCash }} </td>
                                        </tr>
                                        <tr>
                                            <td className='p-0 m-0'>Target cach amount</td>
                                            <td className='p-0 m-0'>{{ savingsGoal.currentAmountOfCash }}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-0 m-0'>Start date</td>
                                            <td className='p-0 m-0'>{{ savingsGoal.startDate }}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-0 m-0'>End date</td>
                                            <td className='p-0 m-0'>{{ savingsGoal.endDate }}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-0 m-0'>Creation date</td>
                                            <td className='p-0 m-0'>{{ savingsGoal.createdAt }}</td>
                                        </tr>
                                        <tr>
                                            <td className='p-0 m-0'>Last modification date</td>
                                            <td className='p-0 m-0'>{{ savingsGoal.lastModified }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-if="selectedUser.savingGoals.length === 0">
                                <p className='p-8 m-4'> User has no saving-goals yet</p>
                            </div>
                        </div>

                        <div className="modal-action">
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