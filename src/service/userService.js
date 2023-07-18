import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export async function getUsers() {
    const response = await axios.get(baseUrl + "/users");
    console.log(response.data);
    return response.data; // Return response data
}

export async function getByUsername(username) {
    const response = await axios.get(baseUrl + "/users/username/" + username);
    console.log(response.data);
    return response.data;
}

export async function updateUser(userToUpdate) {
    const response = await axios.put(baseUrl + "/users", userToUpdate);
    console.log(response.data);
    return response.data;

    // return axios.put(baseUrl + "/users", userToUpdate); // Shorter vertion

}

