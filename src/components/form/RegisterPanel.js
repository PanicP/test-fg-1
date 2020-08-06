import React from 'react'
import { Form, Button, Row, Col } from 'antd'
import { TitleField } from './TitleField'
import { FirstNameField } from './FirstNameField'
import { LastNameField } from './LastNameField'
import { PhoneNumberField } from './PhoneNumberField'
import { EmailField } from './EmailField'
import { PasswordField } from './PasswordField'
import { ConfirmPasswordField } from './ConfirmPasswordField'
import { history } from '../../history'
import { callSignUp } from '../../features/auth/authAPI'
import { AddressField } from './AddressField'
import { SubDistrictField } from './SubDistrictField'
import { DistrictField } from './DistrictField'
import { ProvinceField } from './ProvinceField'
import { PostalCodeField } from './PostalCodeField'
import { AgeField } from './AgeField'

export const RegisterPanel = () => {
    const [form] = Form.useForm()

    const onFinish = async (values) => {

        const isSignUpSucceeded = await callSignUp({ data: values })

        if (isSignUpSucceeded) {
            history.push('/')
        }
    }

    return (
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
                <Col span={4}>
                    <TitleField />
                </Col>
                <Col span={10}>
                    <FirstNameField />
                </Col>
                <Col span={10}>
                    <LastNameField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={4}>
                    <AgeField />
                </Col>
                <Col span={10}>
                    <PhoneNumberField />
                </Col>
                <Col span={10}>
                    <AddressField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={6}>
                    <SubDistrictField />
                </Col>
                <Col span={6}>
                    <DistrictField />
                </Col>
                <Col span={6}>
                    <ProvinceField />
                </Col>
                <Col span={6}>
                    <PostalCodeField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Button htmlType="submit" color="primary" type="primary">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
