import { CoffeesRepository } from "./coffees.respository"

describe('Coffees Repository', () => {

  let repository;
  repository = new CoffeesRepository();

  it('should load all coffees', async () => {
    const results = await repository.getAllCoffees();
    expect(results.data.length).toEqual(14);
  })
})