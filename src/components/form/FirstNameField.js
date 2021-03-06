import React from 'react'
import { Form, Input } from 'antd'

export const FirstNameField = ({ data }) => (
    <Form.Item
        name="firstName"
        label="Firstname"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Firstname is required!',
            },
        ]}
    >
        <Input placeholder="John" />
    </Form.Item>
)
