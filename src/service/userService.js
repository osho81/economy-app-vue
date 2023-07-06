import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export async function getUsers() {
    const response = await axios.get(baseUrl + "/users");
    console.log(response.data);
    return response.data; // Return response data
}

