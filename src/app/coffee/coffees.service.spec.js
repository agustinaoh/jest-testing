import axios from "axios"
import { COFFEES } from "../../../fixtures/coffees"
import { CoffeesRepository } from "./coffees.respository";
jest.mock('axios')

describe('Coffees Repository', () => {

    let repository;
    beforeEach(() => {
      axios.mockClear();
      repository = new CoffeesRepository();
    })

    it('should load all coffees', async () => {
      axios.get = jest.fn().mockResolvedValue(COFFEES);

      const results = await repository.getAllCoffees();
      expect(results.data.length).toEqual(14);
    })
})