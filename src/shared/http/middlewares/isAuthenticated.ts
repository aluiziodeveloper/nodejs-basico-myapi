import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new AppError('Failed to verify access token', 401)
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    verify(token, authConfig.jwt.secret as Secret)
    return next()
  } catch {
    throw new AppError('Invalid authentication token', 401)
  }
}
