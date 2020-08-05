import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'antd'
import { TitleField } from './TitleField'
import { FirstNameField } from './FirstNameField'
import { LastNameField } from './LastNameField'
import { PhoneNumberField } from './PhoneNumberField'
import { history } from '../../history'
import { Redirect } from 'react-router-dom'

export const EditProfilePanel = () => {
    const [form] = Form.useForm()
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    const onFinish = async (values) => {
        // const isLoginSucceeded = await callRegis({ data: values })
        // setIsAuthed(isLoginSucceeded)
        // if (isLoginSucceeded) {
        //     history.push('/')
        // }
    }

    return isAuthed ? (
        <Redirect to="/"></Redirect>
    ) : (
        <Form form={form} name="advanced_search" className="ant-advanced-search-form" onFinish={onFinish}>
            <Row gutter={16}>
                <Col span={6}>
                    <TitleField />
                </Col>
                <Col span={9}>
                    <FirstNameField />
                </Col>
                <Col span={9}>
                    <LastNameField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={17}>
                    <PhoneNumberField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Button className="hostel-regis-submit-button" htmlType="submit" color="primary" type="primary">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
