import { ColumnDef } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { MoreHorizontal } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DataTableColumnHeader,
  Button,
  DropdownMenuLabel,
  UserAvatar,
  DropdownMenuSeparator,
  Badge
} from '@/components/ui'
import { IUserInfo } from '@/types'

import { baseURL } from '@/constants'
import {
  DialogAddUserRole,
  DialogAddUserDepartment,
  DialogUpdateUserDepartment,
  DialogDeleteUserDepartment,
  DialogUpdateUsername,
  DialogDeleteUser,
  DialogDeleteUserRole
} from '@/components/app/dialog'

export const useEmployeeColumns = (): ColumnDef<IUserInfo>[] => {
  const { t } = useTranslation('employees')
  const { t: tCommon } = useTranslation(['common'])

  return [
    {
      accessorKey: 'avatar',
      header: t('employees.avatar'),
      cell: ({ row }) => {
        const { avatar } = row.original
        const imageUrl = `${baseURL}/files/${avatar}`
        return <UserAvatar src={imageUrl} />
      }
    },
    {
      accessorKey: 'slug',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('employees.slug')} />
    },
    {
      accessorKey: 'username',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('employees.username')} />
      )
    },
    {
      accessorKey: 'fullname',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('employees.fullname')} />
      )
    },
    {
      accessorKey: 'userRoles',
      header: ({ column }) => <DataTableColumnHeader column={column} title={t('employees.role')} />,
      cell: ({ row }) => {
        const { userRoles } = row.original
        return (
          <div className="flex flex-col gap-3">
            {userRoles &&
              userRoles.map((item) => {
                return (
                  <div className="font-normal w-fit">
                    {item?.role?.nameDisplay} ({item?.role?.nameNormalize})
                  </div>
                )
              })}
          </div>
        )
      }
    },
    {
      accessorKey: 'userDepartments',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('employees.department')} />
      ),
      cell: ({ row }) => {
        const { userDepartments } = row.original
        return (
          <div className="flex flex-col gap-3">
            {userDepartments &&
              userDepartments.map((item) => {
                return item?.department?.description ? (
                  <div className='flex justify-center min-w-[14rem]'>
                    <Badge className="py-1 font-normal bg-green-500 hover:bg-green-500">
                      {item?.department?.description}
                    </Badge>
                  </div>
                ) : (
                  <div></div>
                )
              })}
          </div>
        )
      }
    },
    {
      id: tCommon('common.action'),
      cell: ({ row }) => {
        const user = row.original
        const hasDepartment = user?.userDepartments?.some(dep => dep.department != null)
        const hasRole = user?.userRoles

        return (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 w-8 h-8">
                  <span className="sr-only">
                    {tCommon('common.action')}
                  </span>
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col justify-start" align="end">
                <DropdownMenuLabel>{tCommon('common.action')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DialogUpdateUsername userInfo={user as IUserInfo} />
                <DialogAddUserRole user={user} />
                <DialogAddUserDepartment user={user} />
                {hasDepartment && <DialogUpdateUserDepartment user={user} />}
                {hasDepartment && <DialogDeleteUserDepartment user={user} />}
                {hasRole && <DialogDeleteUserRole user={user} />}
                <DialogDeleteUser userInfo={user} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      }
    }
  ]
}
