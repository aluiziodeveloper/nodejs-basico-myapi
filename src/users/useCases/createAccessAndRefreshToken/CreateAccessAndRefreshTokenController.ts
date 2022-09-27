import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAccessAndRefreshTokenUseCase } from './CreateAccessAndRefreshTokenUseCase'

export class CreateAccessAndRefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createAccessAndRefreshToken = container.resolve(
      CreateAccessAndRefreshTokenUseCase,
    )
    const user_id = request.user.id
    const { refresh_token } = request.body

    const { user, accessToken, refreshToken } =
      await createAccessAndRefreshToken.execute({
        user_id,
        refresh_token,
      })
    return response.status(201).json(
      instanceToInstance({
        user,
        accessToken,
        refreshToken,
      }),
    )
  }
}
