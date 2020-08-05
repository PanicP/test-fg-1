import React from 'react'
import { Form, Input } from 'antd'

export const AddressField = ({ data }) => (
    <Form.Item
        name="address"
        label="Address"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Address is required!',
            },
        ]}
    >
        <Input placeholder="12/3, Bang Phai Alley, Bang Bang Road" />
    </Form.Item>
)
