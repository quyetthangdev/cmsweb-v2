import React from 'react'

import { ReaderIcon } from '@radix-ui/react-icons'

import { DataTable, Label } from '@/components/ui'
import { columns } from './DataTable/columns'
import { useUsers, useUsers2 } from '@/hooks'
import { CustomComponent } from './CustomComponent'
import usePaging from '@/hooks/use-paging'

const Employees: React.FC = () => {
  const { pagination, handlePageChange, handlePageSizeChange } = usePaging()

  const { data } = useUsers({
    page: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const { data: data2 } = useUsers2()
  console.log(data2)

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex items-center gap-1 font-semibold text-normal text-md font-beVietNam">
        <ReaderIcon className="header-icon" />
        Danh sách nhân viên
      </Label>
      <DataTable
        columns={columns}
        data={data?.items || []}
        total={data?.total || 0}
        pages={data?.pages || 0}
        page={pagination.pageIndex + 1}
        pageSize={pagination.pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        CustomComponent={CustomComponent}
      />
    </div>
  )
}

export default Employees
