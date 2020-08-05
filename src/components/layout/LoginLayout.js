import React, { Fragment } from 'react'
import { Row, Col } from 'antd'


export const LoginLayout = ({ children }) => {

    return (
        <Fragment>
            <Row gutter={16}>
                <Col span={4} />
                <Col span={16}>
                    <div>{children}</div>
                </Col>
                <Col span={4} />
            </Row>
        </Fragment>
    )
}
