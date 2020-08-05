import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

export const TableLayout = ({ children }) => {
    return (
        <Fragment>
            <TableLayoutWrapper>
                <Row gutter={16}>
                    <Col span={2} />
                    <Col span={20}>
                        <div>{children}</div>
                    </Col>
                    <Col span={2} />
                </Row>
            </TableLayoutWrapper>
        </Fragment>
    )
}

const TableLayoutWrapper = styled.div`
    margin-top: 5vh;
`
