import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './Forms';

export default {
    title: 'Example/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form></Form>;