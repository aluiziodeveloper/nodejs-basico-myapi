import { Role } from '@roles/entities/Role'
import { DataSource } from 'typeorm'
import { CreateRolesTable1657974893356 } from './migrations/1657974893356-CreateRolesTable'
import { CreateUsersTable1657996796706 } from './migrations/1657996796706-CreateUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1657974893356, CreateUsersTable1657996796706],
})
