import React from 'react'
import { Form, Input } from 'antd'
import { handleOnlyNumberAvailable } from '../../features/form/helpers'

export const AgeField = ({ data }) => (
    <Form.Item
        name="age"
        label="Age"
        initialValue={data}
        rules={[
            {
                required: true,
                type: "regexp",
                pattern: new RegExp(/\d+/g),
                message: 'Age is required!',
            },
        ]}
    >
        <Input placeholder="99" maxLength={2} onKeyPress={handleOnlyNumberAvailable}/>
    </Form.Item>
)
