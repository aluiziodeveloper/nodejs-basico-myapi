import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type ShowRoleParams = {
  id: string
}

export class ShowRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    return role
  }
}
