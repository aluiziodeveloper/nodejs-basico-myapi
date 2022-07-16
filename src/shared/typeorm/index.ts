import { Role } from '@roles/entities/Role'
import { DataSource } from 'typeorm'
import { CreateRolesTable1657974893356 } from './migrations/1657974893356-CreateRolesTable'
import { CreateUsersTable1657996796706 } from './migrations/1657996796706-CreateUsersTable'
import { AddRoleIdToUsersTable1657997456404 } from './migrations/1657997456404-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1657974893356,
    CreateUsersTable1657996796706,
    AddRoleIdToUsersTable1657997456404,
  ],
})
