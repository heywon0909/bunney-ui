import type { Meta, StoryObj } from '@storybook/react'

import { ColorBunney } from '@/ColorBunney/ColorBunney'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Bunney-ui/ColorBunney',
    component: ColorBunney,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: { control: 'color' },
        earColor: { control: 'color' },
        eyeColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof ColorBunney>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        color: '',
    },
}

export const Secondary: Story = {
    args: {
        color: 'linear-gradient(159deg, black, transparent)',
        earColor: 'linear-gradient(#616161, #c5c5c5)',
    },
}
