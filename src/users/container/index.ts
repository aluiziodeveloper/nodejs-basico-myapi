import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
