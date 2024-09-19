import { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { PlusCircledIcon } from '@radix-ui/react-icons'

import {
  Button,
  DataTableColumnHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui'
import { IProductInfo } from '@/types'
import { DialogAddProductRequest } from '@/components/app/dialog'

export const useColumnsSearch = (): ColumnDef<IProductInfo>[] => {
  const [selectedProduct, setSelectedProduct] = useState<IProductInfo | null>(null)
  const [openDialog, setOpenDialog] = useState(false)

  const handleButtonClick = (product: IProductInfo) => {
    setOpenDialog(true)
    setSelectedProduct(product)
  }

  const onOpenChange = () => {
    setOpenDialog(false)
  }

  return [
    {
      accessorKey: 'addRequest',
      header: 'Thêm vào phiếu yêu cầu',
      cell: ({ row }) => {
        const product = row.original

        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center w-full">
                  <Button variant="ghost" onClick={() => handleButtonClick(product)}>
                    <PlusCircledIcon className="w-4 h-4" />
                  </Button>
                  {selectedProduct === product && (
                    <DialogAddProductRequest
                      openDialog={openDialog}
                      product={selectedProduct}
                      component={null}
                      onOpenChange={onOpenChange}
                    />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Thêm vào phiếu yêu cầu</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      }
    },
    {
      accessorKey: 'code',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Mã vật tư" />
    },
    {
      accessorKey: 'name',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Tên vật tư" />
    },
    {
      accessorKey: 'provider',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Nhà cung cấp" />
    },
    {
      accessorKey: 'unit',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Đơn vị" />
    },
    {
      accessorKey: 'quantity',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Số lượng" />
    },
    {
      accessorKey: 'description',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Mô tả" />
    }
  ]
}
