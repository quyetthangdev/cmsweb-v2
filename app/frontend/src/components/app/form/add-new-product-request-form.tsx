import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Form,
  Button,
  Textarea
} from '@/components/ui'
import { addNewProductRequestSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { IProductInfo } from '@/types'
import { useRequisitionStore } from '@/stores'
import { showToast } from '@/utils'

interface IFormAddNewProductProps {
  data?: IProductInfo
  onSubmit: (data: IProductInfo) => void
}

export const AddNewProductRequestForm: React.FC<IFormAddNewProductProps> = ({ data, onSubmit }) => {
  const form = useForm<z.infer<typeof addNewProductRequestSchema>>({
    resolver: zodResolver(addNewProductRequestSchema),
    defaultValues: {
      createdAt: data?.createdAt || new Date().toISOString(),
      code: data?.code || '',
      name: data?.name || '',
      provider: data?.provider || '',
      unit: data?.unit || '',
      quantity: data?.quantity || '',
      description: data?.description || '',
      status: data?.status || ''
    }
  })

  const handleSubmit = (values: z.infer<typeof addNewProductRequestSchema>) => {
    const completeData: IProductInfo = {
      ...values,
      createdAt: values.createdAt || ''
    }
    onSubmit(completeData)
  }

  return (
    <div className="mt-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="createdAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngày tạo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã vật tư</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên vật tư</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nhà cung cấp</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trạng thái</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số lượng</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="Nhập số lượng"
                      {...field}
                      value={field.value || 2}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Đơn vị</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end w-full">
            <Button type="submit">Thêm</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
