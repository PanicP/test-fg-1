import React from 'react'
import { Form, Input } from 'antd'

export const DistrictField = ({ data }) => (
    <Form.Item
        name="district"
        label="District"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'District is required!',
            },
        ]}
    >
        <Input placeholder="Khlong Toey" />
    </Form.Item>
)
