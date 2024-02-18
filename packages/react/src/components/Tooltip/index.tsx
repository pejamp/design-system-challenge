import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent, TooltipTrigger } from './styles'
import { ReactNode } from 'react'

export interface TooltipProps {
  trigger: ReactNode
  children: ReactNode
}

export function Tooltip({ trigger, children }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            {children}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
