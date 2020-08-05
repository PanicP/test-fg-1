import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { history } from '../../history'
import { Redirect } from 'react-router-dom'
import { callAuth } from '../../features/auth/authAPI'
// import { callAuth } from '../../features/auth/auth-api'
// import { Loading } from '../util'
// import { useUtil } from '../../features/util/util-store'

export const LoginPanel = () => {
    // const { handleSetIsLoading } = useUtil()
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    const onFinish = async (values) => {
        // handleSetIsLoading({ isLoading: true })
        // const isLoginSucceeded = await callAuth()
        callAuth()
        const isLoginSucceeded = true
        setIsAuthed(isLoginSucceeded)
        if (isLoginSucceeded) {
            history.push('/')
        }
        // handleSetIsLoading({ isLoading: false })
    }

    const onFinishFailed = (errorInfo) => {}

    return isAuthed ? (
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
                        label="Username"
                        name="username"
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
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
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
