import { hash } from 'bcryptjs'
import { v4 as uuidV4 } from 'uuid'
import { dataSource } from '@shared/typeorm'

async function create() {
  const connection = await dataSource.initialize()
  // Create Role
  const roleId = uuidV4()
  await connection.query(
    `INSERT INTO ROLES(id, name)
      values('${roleId}', 'T.I.')
    `,
  )
  // Create User
  const userId = uuidV4()
  const password = await hash('1234', 10)
  await connection.query(
    `INSERT INTO USERS(id, name, email, password, isAdmin, roleId)
      values('${userId}', 'admin', 'a@a.com', '${password}', true, '${roleId}')
    `,
  )

  await connection.destroy()
}

create().then(() => console.log('User admin created!'))
