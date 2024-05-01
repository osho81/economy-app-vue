<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { createSavingsGoal } from '@/service/savingsGoalService';

// Note: this file is one of the ones using script setup

// Handle inputs
const savingGoalNameVal = ref(); // use values in submit method
const currentAmountVal = ref();
const targetAmountVal = ref();
const startDateVal = ref();
const endDateVal = ref();
const userIdVal = ref();


const handleGoalName = (event: any) => {
    const currentInput = event.currentTarget.value;
    savingGoalNameVal.value = currentInput;
    console.log(savingGoalNameVal.value); // Prints out current state of firstName ref value
}
const handleCurrentAmount = (event: any) => {
    const currentInput = event.currentTarget.value;
    currentAmountVal.value = currentInput;
    console.log(currentAmountVal.value);
}
const handleTargetAmount = (event: any) => {
    const currentInput = event.currentTarget.value;
    targetAmountVal.value = currentInput;
    console.log(targetAmountVal.value);
}
const handleStartDate = (event: any) => {
    const currentInput = event.currentTarget.value;
    startDateVal.value = currentInput;
    console.log(startDateVal.value);
}
const handleEndDate = (event: any) => {
    const currentInput = event.currentTarget.value;
    endDateVal.value = currentInput;
    console.log(endDateVal.value);
}
const handleUserId = (event: any) => {
    const currentInput = event.currentTarget.value;
    userIdVal.value = currentInput;
    console.log(userIdVal.value);
}

const submitCreateSavingsGoal = (event: any) => { // Event not necessary/not used here

    if (savingGoalNameVal.value == null || currentAmountVal.value == null
        || targetAmountVal.value == null || startDateVal.value == null
        || endDateVal.value == null || userIdVal.value == null) {

        alert("Please fill in all fields");
    } else {
        console.log(targetAmountVal.value);
        let savingGoalToCreate = {
            goalName: savingGoalNameVal.value,
            currentAmountOfCash: currentAmountVal.value,
            targetAmountOfCash: targetAmountVal.value,
            startDate: startDateVal.value,
            endDate: endDateVal.value,
            userId: userIdVal.value
        };

        createSavingsGoal(savingGoalToCreate).then((response) => {
            console.log(response);
        })
        // Go back a step in routing. go to user list or elsewhere
        // router.go(-1);
        router.push('/listusers');
    }

}


</script>

<template>
    <div className='flex flex-col justify-center items-center p-10'>
        <h2 class="text-center font-semibold text-lg">Create Savings Goal</h2>
        <div className="form-control w-full max-w-xs mt-2 space-y-1">

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">Name of savingsgoal: </span>
            </label>
            <input type="text" placeholder="Example: Car Purchase" @input="handleGoalName($event)"
                className="input input-sm input-bordered w-full max-w-xs" />

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">Current amount: </span>
            </label>
            <input type="number" placeholder="0" @input="handleCurrentAmount($event)"
                className="input input-sm input-bordered w-full max-w-xs" />

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">Target amount: </span>
            </label>
            <input type="number" placeholder="0" @input=handleTargetAmount($event)
                className="input input-sm input-bordered w-full max-w-xs" />

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">Start date: </span>
            </label>
            <input type="date" @input=handleStartDate($event) className="input input-sm input-bordered w-full max-w-xs" />

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">End date: </span>
            </label>
            <input type="date" @input=handleEndDate($event) className="input input-sm input-bordered w-full max-w-xs" />

            <label className="label justify-center pb-1">
                <span className="label-text text-sm font-semibold">User ID: </span>
            </label>
            <input type="number" placeholder="0" @input=handleUserId($event)
                className="input input-sm input-bordered w-full max-w-xs" />

        </div>
        <div className="flex justify-center items-center p-5">
            <button className="btn btn-outline mr-4" @click="router.go(-1)">Cancel</button>
            <button className="btn btn-outline" @click="submitCreateSavingsGoal($event)">Done</button>
        </div>

    </div>
</template>

<style></style>