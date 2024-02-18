import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@pejamp-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: <time>Quarta-feira, 23 de Outubro às 16h</time>,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
