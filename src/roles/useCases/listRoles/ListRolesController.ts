import { Request, Response } from 'express'
import { ListRolesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute()
    return response.json(roles)
  }
}
