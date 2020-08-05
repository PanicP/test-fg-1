import React from 'react'
import { Form, Input } from 'antd'

export const AgeField = ({ data }) => (
    <Form.Item
        name="age"
        label="Age"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Age is required!',
            },
        ]}
    >
        <Input placeholder="99" />
    </Form.Item>
)
