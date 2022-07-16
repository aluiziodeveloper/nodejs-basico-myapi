import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

type DeleteRoleParams = {
  id: string
}

@injectable()
export class DeleteRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id)
    if (!role) {
      throw new AppError('Role not found', 404)
    }
    await this.rolesRepository.delete(role)
  }
}
