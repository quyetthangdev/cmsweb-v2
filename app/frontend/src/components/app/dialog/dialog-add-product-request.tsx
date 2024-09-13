import { useEffect, useState } from 'react'
import { z } from 'zod'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui'

import { addNewProductRequestSchema } from '@/schemas'
import { AddNewProductRequestForm } from '@/components/app/form'
import { IProductInfo } from '@/types'

interface DialogAddProductRequestProps {
  handleAddRequest: (product: IProductInfo) => void
  openDialog: boolean
  product: IProductInfo
  component: React.ReactNode
  onOpenChange: () => void
}

export function DialogAddProductRequest({
  handleAddRequest,
  openDialog,
  product,
  component,
  onOpenChange
}: DialogAddProductRequestProps) {
  const handleSubmit = (data: z.infer<typeof addNewProductRequestSchema>) => {
    const completeData: IProductInfo = {
      ...data,
      id: '',
      createdBy: '',
      address: ''
    }
    handleAddRequest(completeData)
    onOpenChange()
  }

  return (
    <Dialog open={openDialog} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{component}</DialogTrigger>
      <DialogContent className="max-w-[44rem]">
        <DialogHeader>
          <DialogTitle>Thêm vật tư mới</DialogTitle>
          <DialogDescription>Nhập đầy đủ thông tin bên dưới để thêm vật tư mới</DialogDescription>
        </DialogHeader>
        {product && (
          <>
            {product.productName}
            <AddNewProductRequestForm
              data={product}
              onSubmit={handleSubmit}
              handleAddRequest={handleAddRequest}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
