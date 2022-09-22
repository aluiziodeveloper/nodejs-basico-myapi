import { RefreshToken } from '@users/entities/RefreshToken'

export type CreateRefreshTokenDTO = {
  user_id: string
  token: string
  expires: Date
  valid: boolean
}

export interface IRefreshTokenRepository {
  create({
    expires,
    token,
    user_id,
    valid,
  }: CreateRefreshTokenDTO): Promise<RefreshToken>
  findByToken(token: string): Promise<RefreshToken | null>
  invalidate(refresh_token: RefreshToken): Promise<void>
}
