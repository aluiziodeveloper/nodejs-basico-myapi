import { IRefreshTokenRepository } from '@users/repositories/IRefreshTokenRepository'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { RefreshTokenRepository } from '@users/repositories/RefreshTokenRepository'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController'
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController'
import { UpdateProfileController } from '@users/useCases/updateProfile/UpdateProfileController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton<IRefreshTokenRepository>(
  'RefreshTokenRepository',
  RefreshTokenRepository,
)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUsersControllers', ListUsersController)
container.registerSingleton('CreateLoginController', CreateLoginController)
container.registerSingleton('UpdateAvatarController', UpdateAvatarController)
container.registerSingleton('ShowProfileController', ShowProfileController)
container.registerSingleton('UpdateProfileController', UpdateProfileController)
