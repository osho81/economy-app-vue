<script setup lang="ts">
import { ref } from 'vue';
import { getSavingGoals } from '@/service/savingsGoalService';
import type SavingsGoal from '@/models/SavingsGoal';

const listSaveGoals = ref(); // Manage list state,; start empty


// TODO: sortTable, se if there is a component ready to use
// Change binding in elements to: @click="sortTable", include event if needed (event)

// Automatically call the imported getByUsername from UserService
getSavingGoals().then((response) =>{
    console.log(response);
    listSaveGoals.value = response;
});


// Do the sorting logic in this method:
const sortTable = (event: any) => {
    // My sorting logic
}


</script> 


<template>

<div className='m-6 pt-10 sm:p-10'>

<div className="overflow-x-auto">
    <table className="table table-zebra">
        <thead className='text-xs p-0 m-0 space-x-0 sm:text-sm'>
            <tr>
                <th className='p-0 m-0'>
                    <span id='goalId' @click="sortTable($event)">
                        Savingsgoal id
                        <FontAwesomeIcon icon={typeArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='userId' onclick={{sortTable}}>
                        User id
                        <FontAwesomeIcon icon={typeArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='goalName' onclick={{sortTable}}>
                        Goal name
                        <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='Current Amount' onclick={{sortTable}}>
                        Current Amount
                        <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='Target Amount' onclick={{sortTable}}>
                        Target Amount
                        <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='Start' onclick={{sortTable}}>
                        Start
                        <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
                <th className='p-0 m-0'>
                    <span id='End' onclick={{sortTable}}>
                        End
                        <FontAwesomeIcon icon={dailySekArrow} className="not-clickable-part ml-1" />
                    </span>
                </th>
            </tr>
        </thead>


        <tbody className='text-[8px] p-0 m-0 space-x-0 sm:text-sm'>
            <!-- Loop through fetched usersList and display in table:  -->
            <tr v-for="(goal, i) in listSaveGoals" :key="i">
                <td className='p-0 m-0'> {{ goal.id }} </td>
                <td className='p-0 m-0'> {{ goal.userId }} </td>
                <td className='p-0 m-0'> {{ goal.goalName }} </td>
                <td className='p-0 m-0'> {{ goal.currentAmountOfCash }} </td>
                <td className='p-0 m-0'> {{ goal.targetAmountOfCash }} </td>
                <td className='p-0 m-0'> {{ goal.startDate }} </td>
                <td className='p-0 m-0'> {{ goal.endDate }} </td>
            </tr>

        </tbody>

    </table>
</div>
</div>

</template> 

<style scoped></style>