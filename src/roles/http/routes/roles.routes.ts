import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body
  const role = rolesRepository.create({ name })

  return response.status(201).json(role)
})

export { rolesRouter }
