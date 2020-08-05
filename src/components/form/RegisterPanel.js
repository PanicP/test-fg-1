import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'antd'
import { TitleField } from './TitleField'
import { FirstNameField } from './FirstNameField'
import { LastNameField } from './LastNameField'
import { PhoneNumberField } from './PhoneNumberField'
import { EmailField } from './EmailField'
import { PasswordField } from './PasswordField'
import { ConfirmPasswordField } from './ConfirmPasswordField'
import { history } from '../../history'
import { Redirect } from 'react-router-dom'
import { callSignUp } from '../../features/auth/authAPI'

export const RegisterPanel = () => {
    const [form] = Form.useForm()
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    const onFinish = async (values) => {
        console.log('on register', values.email, values.password)
        const isSignUpSucceeded = await callSignUp({ email: values.email, password: values.password })
        // setIsAuthed(isLoginSucceeded)
        if (isSignUpSucceeded) {
            history.push('/')
        }
    }

    return isAuthed ? (
        <Redirect to="/"></Redirect>
    ) : (
        <Form form={form} onFinish={onFinish}>
            <Row gutter={16}>
                <Col span={8}>
                    <EmailField />
                </Col>
                <Col span={8}>
                    <PasswordField />
                </Col>
                <Col span={8}>
                    <ConfirmPasswordField />
                </Col>
            </Row>
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
