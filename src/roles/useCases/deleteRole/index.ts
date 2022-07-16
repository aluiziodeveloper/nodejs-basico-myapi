import { RolesRepository } from '@roles/repositories/RolesRepository'
import { DeleteRoleController } from './DeleteRoleController'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)
export const deleteRolesController = new DeleteRoleController(deleteRoleUseCase)
