import React, { useContext } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { Redirect } from 'react-router-dom'
import { callLogIn } from '../../features/auth/authAPI'
import { AuthContext } from './AuthProvider'
import { history } from '../../history'
import styled from 'styled-components'

export const LoginPanel = () => {
    const { currentUser } = useContext(AuthContext)

    const onFinish = async (values) => {
        const isLoginSucceeded = await callLogIn({ email: values.email, password: values.password })

        if (isLoginSucceeded) {
            history.push('/')
        }
    }

    const onFinishFailed = (errorInfo) => {}

    return !!currentUser ? (
        <Redirect to="/"></Redirect>
    ) : (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            {/* <Loading /> */}
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={5} />
            </Row>
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col span={5} />
            </Row>
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
                    <Form.Item {...tailLayout}>
                        <StyledButton type="primary" htmlType="submit">
                            Submit
                        </StyledButton>
                    </Form.Item>
                </Col>
                <Col span={5} />
            </Row>
        </Form>
    )
}

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
}

const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18,
    },
}

const StyledButton = styled(Button)`
    width: 100%;
`
