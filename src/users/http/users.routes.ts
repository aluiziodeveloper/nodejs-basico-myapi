import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'

const usersRouter = Router()
const createUserController = container.resolve(CreateUserController)

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

export { usersRouter }
