import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function getUsers() {
    const response = await axios.get(baseUrl + "/users");
    return response.data.users   
}

