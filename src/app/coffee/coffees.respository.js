import axios from "axios"

export class CoffeesRepository {

  // promise: async / await
  async getAllCoffees() {
    const getAllCoffees = await axios.get('https://api.sampleapis.com/coffee/hot');
    return getAllCoffees;
  }
}
