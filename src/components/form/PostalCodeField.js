import React from 'react'
import { Form, Input } from 'antd'
import { handleOnlyNumberAvailable } from '../../features/form/helpers'

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
        <Input minLength={5} maxLength={5} placeholder="10110"  onKeyPress={handleOnlyNumberAvailable}/>
    </Form.Item>
)
