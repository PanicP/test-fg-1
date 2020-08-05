import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

export const FormLayout = ({ children }) => {
    return (
        <Fragment>
            <FormLayoutWrapper>
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <div>{children}</div>
                    </Col>
                    <Col span={4} />
                </Row>
            </FormLayoutWrapper>
        </Fragment>
    )
}

const FormLayoutWrapper = styled.div`
    margin-top: 5vh;
`
