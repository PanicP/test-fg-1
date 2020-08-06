import React from 'react'
import { Form, Input } from 'antd'

export const EmailField = ({ data }) => (
    <Form.Item
        name="email"
        label="E-mail"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Email is required!',
            },
            {
                type: 'email',
                message: 'Please fill a valid E-mail!',
            },
        ]}
    >
        <Input placeholder="John@john.com" />
    </Form.Item>
)
