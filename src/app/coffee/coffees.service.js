import { CoffeesRepository } from "./coffees.respository";

export class CoffeesService {

  constructor() {
    this.repository = new CoffeesRepository();
  }

  async getCoffees() {
    return await this.repository.getAllCoffees();
  }
}