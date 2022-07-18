import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase)
    const { name, email, password, isAdmin, roleId } = request.body
    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      isAdmin,
      roleId,
    })
    return response.status(201).json(instanceToInstance(user))
  }
}
