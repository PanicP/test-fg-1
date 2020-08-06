import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

export const LoginLayout = ({ children }) => {
    return (
        <Fragment>
            <LoginLayoutWrapper>
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <div>{children}</div>
                    </Col>
                    <Col span={4} />
                </Row>
            </LoginLayoutWrapper>
        </Fragment>
    )
}

const LoginLayoutWrapper = styled.div`
    margin-top: 5vh;
`
