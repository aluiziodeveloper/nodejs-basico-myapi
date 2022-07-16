import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { container } from 'tsyringe'

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
)
