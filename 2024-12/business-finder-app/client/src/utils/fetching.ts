import axios from "axios";

export async function getBusinesses(){
    const response = await axios.get('http://localhost:3000/businesses');
      return response.data;
}