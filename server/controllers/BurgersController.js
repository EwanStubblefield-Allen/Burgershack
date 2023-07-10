import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('/api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurgersId)
      .post('', this.createBurgers)
      .put('/:burgerId', this.updateBurgers)
      .delete('/:burgerId', this.deleteBurgers)
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurger()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getBurgersId(req, res, next) {
    try {
      const burger = await burgersService.getBurgersId(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurgers(req, res, next) {
    try {
      const newBurger = await burgersService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async updateBurgers(req, res, next) {
    try {
      const updateBurger = await burgersService.updateBurgers(req.params.burgerId, req.body)
      res.send(updateBurger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurgers(req, res, next) {
    try {
      const burgers = await burgersService.deleteBurgers(req.params.burgerId)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}