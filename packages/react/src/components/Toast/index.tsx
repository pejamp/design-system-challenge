import * as ToastRadix from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'

export interface ToastProps {
  title: string
  description?: ReactNode
}

export function Toast({ title, description }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot open={true}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X size={20} weight={'bold'} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}
