import { FakeBurgers } from "../db/DbFake.js"

export class Burger {
  constructor(data) {
    this.id = data.id || FakeBurgers.burgers.length + 1
    this.name = data.name
    this.price = data.price
  }
}