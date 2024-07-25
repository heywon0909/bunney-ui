import type { Meta, StoryObj } from '@storybook/react'

import { Mackey } from '../Mackey'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Bunney-ui/Mackey',
    component: Mackey,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: { control: 'color' },
        size: { control: 'number' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof Mackey>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        color: '',
        size: 0,
    },
}

export const Secondary: Story = {
    args: {
        color: 'linear-gradient(159deg, black, transparent)',
        size: 10,
    },
}
