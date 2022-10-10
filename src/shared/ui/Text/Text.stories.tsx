import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title Title',
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title Title Title',
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Title Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title Title Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title',
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title Title Title',
    text: 'kdakkdkmdmkd Slsdkdk Description Description Description',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
