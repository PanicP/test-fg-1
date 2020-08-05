import React from 'react'
import { Form, Input } from 'antd'

export const ProvinceField = ({ data }) => (
    <Form.Item
        name="province"
        label="Province"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Province is required!',
            },
        ]}
    >
        <Input placeholder="Bangkok" />
    </Form.Item>
)
