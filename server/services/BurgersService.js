import { FakeBurgers } from "../db/DbFake.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  async getBurger() {
    return FakeBurgers.burgers
  }

  async getBurgersId(burgerId) {
    let foundBurger = FakeBurgers.burgers.find(b => b.id == burgerId)
    if (!foundBurger) {
      throw new BadRequest(`${burgerId} is not a valid Id`)
    }
    return foundBurger
  }

  async createBurger(data) {
    let burgers = FakeBurgers.burgers
    burgers.push(new Burger(data))
    return burgers
  }

  async updateBurgers(burgerId, data) {
    let original = await this.getBurgersId(burgerId)
    original.name = data.name || original.name
    original.price = data.price || original.price
    return FakeBurgers.burgers
  }

  async deleteBurgers(burgerId) {
    let burgers = FakeBurgers.burgers
    let foundIndex = burgers.findIndex(b => b.id == burgerId)
    if (foundIndex == -1) {
      throw new BadRequest(`${burgerId} is not a valid Id`)
    }
    burgers.splice(foundIndex, 1)
    return burgers
  }
}

export const burgersService = new BurgersService()