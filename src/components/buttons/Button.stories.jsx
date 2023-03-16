import React from 'react';
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryDisabled = Template.bind({});

Primary.args = {
  theme: 'primary',
  text: 'Button',
};

PrimaryDisabled.args = {
  theme: 'primary',
  text: 'Button',
  disabled: true,
};

Secondary.args = {
  theme: 'secondary',
  text: 'Button',
};

SecondaryDisabled.args = {
  theme: 'secondary',
  text: 'Button',
  disabled: true,
};
