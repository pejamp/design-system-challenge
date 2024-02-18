import { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@pejamp-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', justifyContent: 'center' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    trigger: (
      <div
        style={{
          backgroundColor: '#FFF',
          borderRadius: '100%',
          padding: '8px',
          width: '25px',
          height: '25px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Plus weight="bold" />
      </div>
    ),
    children: 'Primary tip',
  },
}
