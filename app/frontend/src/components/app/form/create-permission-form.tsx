import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
  Button
} from '@/components/ui'
import { createPermissionSchema, TCreateAuthoritySchema, TCreatePermissionSchema } from '@/schemas'

import { zodResolver } from '@hookform/resolvers/zod'
import { SelectAuthority, SelectRole } from '../select'

interface IFormCreatePermissionProps {
  onSubmit: (data: TCreatePermissionSchema) => void
}

export const CreatePermissionForm: React.FC<IFormCreatePermissionProps> = ({ onSubmit }) => {
  const { t } = useTranslation(['permissions'])

  const form = useForm<TCreatePermissionSchema>({
    resolver: zodResolver(createPermissionSchema),
    defaultValues: {
      nameNormalize: '',
      description: ''
    }
  })

  const handleSubmit = (values: TCreateAuthoritySchema) => {
    onSubmit(values)
  }

  const formFields = {
    nameNormalize: (
      <FormField
        control={form.control}
        name="nameNormalize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('permissions.selectRole')}</FormLabel>
            <FormControl>
              <SelectRole onChange={() => {}} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    description: (
      <FormField
        control={form.control}
        name="description"
        render={() => (
          <FormItem>
            <FormLabel>{t('permissions.selectAuthority')}</FormLabel>
            <FormControl>
              <SelectAuthority onChange={() => {}} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  return (
    <div className="mt-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(formFields).map((key) => (
              <React.Fragment key={key}>
                {formFields[key as keyof typeof formFields]}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-end">
            <Button className="flex justify-end" type="submit">
              {t('permissions.createPermission')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
