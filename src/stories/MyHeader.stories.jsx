import React from 'react';

import { Header } from '../components/header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    headerTitle: {
        name: '4 Petes Sake',
    },
};
