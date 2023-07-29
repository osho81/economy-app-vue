import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export async function getSavingGoals() { // Not used yet as of 230719
    const response = await axios.get(baseUrl + "/savings-goals");
    console.log(response.data);
    return response.data; // Return response data
}

export async function createSavingsGoal(savingsGoalToCreate) {
    const response = await axios.post(baseUrl + "/savings-goals", savingsGoalToCreate);
    console.log(response.data);
    return response.data;
}

//TODO: ADD UPDATE SERVICE METHOD
// Adjust backend endpoint if needed


export async function delSavingsGoal(goalId) {
    const response = await axios.delete(baseUrl + "/savings-goals/" + goalId);
    console.log(response.data);
    return response.data;
}



