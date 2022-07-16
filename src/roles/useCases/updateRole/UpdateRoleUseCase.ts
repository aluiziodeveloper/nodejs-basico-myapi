import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'

type UpdateRoleDTO = {
  id: string
  name: string
}

export class UpdateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    const roleWithSameName = await this.rolesRepository.findByName(name)
    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError('Role name not informed or already in use')
    }
    role.name = name
    return this.rolesRepository.save(role)
  }
}
