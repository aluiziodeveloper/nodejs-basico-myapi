import { Request, Response } from 'express'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.deleteRoleUseCase.execute({ id })
    return response.status(204).send()
  }
}
