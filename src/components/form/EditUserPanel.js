/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Form, Button, Row, Col } from 'antd'
import { TitleField } from './TitleField'
import { FirstNameField } from './FirstNameField'
import { LastNameField } from './LastNameField'
import { PhoneNumberField } from './PhoneNumberField'
import { history } from '../../history'
import { callGetUser, callUpdateUser } from '../../features/user/userAPI'
import { AgeField } from './AgeField'
import { AddressField } from './AddressField'
import { SubDistrictField } from './SubDistrictField'
import { DistrictField } from './DistrictField'
import { ProvinceField } from './ProvinceField'
import { PostalCodeField } from './PostalCodeField'
import styled from 'styled-components'

export const EditUserPanel = ({ email }) => {
    const [form] = Form.useForm()

    useEffect(() => {
        const getUser = async () => {
            const user = await callGetUser({ email })
            form.setFieldsValue({
                ...user,
            })
        }
        getUser()
    }, [])

    const onFinish = async (values) => {
        const isSignUpSucceeded = await callUpdateUser({ data: values, email })

        if (isSignUpSucceeded) {
            history.push('/')
        }
    }

    return (
        <Form form={form} onFinish={onFinish}>
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
                    <StyledButton htmlType="submit" color="primary" type="primary">
                        Submit
                    </StyledButton>
                </Col>
            </Row>
        </Form>
    )
}

const StyledButton = styled(Button)`
    width: 100%;
`
