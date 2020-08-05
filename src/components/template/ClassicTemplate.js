import React, { Fragment, useState } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { history } from '../../history'
import { callLogOut } from '../../features/auth/authAPI'
import firebase from '../../app/firebase'

export const ClassicTemplate = ({ children }) => {
    const user = firebase.auth().currentUser
    const [isAuthed, setIsAuthed] = useState(user ? user.getIdToken() : '')

    const handleLogOut = async () => {
        const isLogOutSucceeded = await callLogOut()
        if (isLogOutSucceeded) {
            history.push('/login')
        }
    }

    const handleLogIn = () => {
        history.push('/login')
    }

    return (
        <Fragment>
            <HeaderWrapper>
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <Header>
                            <PrioHeaderText onClick={() => history.push('/')}>User Management</PrioHeaderText>
                            {/* <HeaderText onClick={handleLogOut}>Login</HeaderText> */}
                            {isAuthed ? (
                                <HeaderText onClick={handleLogOut}>Log Out</HeaderText>
                            ) : (
                                <HeaderText onClick={handleLogIn}>Log In</HeaderText>
                            )}
                        </Header>
                    </Col>
                    <Col span={4} />
                </Row>
            </HeaderWrapper>
            {children}
            <div></div>
        </Fragment>
    )
}

const HeaderWrapper = styled.div`
    height: 64px;
    border-bottom: 1px solid lightgrey;
`

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 32px;
    align-items: center;
`

const PrioHeaderText = styled.span`
    font-size: 32px;
    font-weight: bold;
`

const HeaderText = styled.span`
    font-size: 24px;
`
