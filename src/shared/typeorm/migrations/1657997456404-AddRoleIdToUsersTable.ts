import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddRoleIdToUsersTable1657997456404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'roleId',
        type: 'uuid',
        isNullable: true,
      }),
    )
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'UsersRoles',
        columnNames: ['roleId'],
        referencedTableName: 'roles',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UsersRoles')
    await queryRunner.dropColumn('users', 'roleId')
  }
}
