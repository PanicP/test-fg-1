import React from 'react'
import { Form, Input } from 'antd'

export const PostalCodeField = ({ data }) => (
    <Form.Item
        name="postalCode"
        label="Postal Code"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Postal code is required!',
            },
        ]}
    >
        <Input placeholder="10110" />
    </Form.Item>
)
