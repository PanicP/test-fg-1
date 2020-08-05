import React from 'react'
import { Form, Input } from 'antd'

export const SubDistrictField = ({ data }) => (
    <Form.Item
        name="subDistrict"
        label="Sub-district"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Sub-district is required!',
            },
        ]}
    >
        <Input placeholder="Khlong Toey" />
    </Form.Item>
)
