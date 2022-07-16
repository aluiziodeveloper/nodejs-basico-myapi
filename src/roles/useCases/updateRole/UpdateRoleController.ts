import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'

export class UpdateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateRoleUseCase = container.resolve(UpdateRoleUseCase)
    const { id } = request.params
    const { name } = request.body
    const role = await updateRoleUseCase.execute({ id, name })

    return response.status(200).json(role)
  }
}
