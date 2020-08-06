import React, { Fragment, useContext } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { history } from '../../history'
import { callLogOut } from '../../features/auth/authAPI'
import firebase from '../../app/firebase'
import { AuthContext } from '../auth/AuthProvider'

export const ClassicTemplate = ({ children }) => {
    const user = firebase.auth().currentUser
    const { currentUser } = useContext(AuthContext)

    const handleLogOut = async () => {
        const isLogOutSucceeded = await callLogOut()
        if (isLogOutSucceeded) {
            history.push('/login')
        }
    }

    const handleLogIn = () => {
        history.push('/login')
    }

    const handleRegister = () => {
        history.push('/register')
    }

    const handleEditProfile = () => {
        history.push(`/user/${user.email}`)
    }

    return (
        <Fragment>
            <HeaderWrapper>
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <Header>
                            <PrioHeaderText onClick={() => history.push('/')}>User Management</PrioHeaderText>
                            <div>
                                <HeaderText onClick={handleRegister}>Register</HeaderText>
                                {currentUser ? (
                                    <Fragment>
                                        <HeaderText onClick={handleEditProfile}>Edit Profile</HeaderText>
                                        <HeaderText onClick={handleLogOut}>Log Out</HeaderText>
                                    </Fragment>
                                ) : (
                                    <HeaderText onClick={handleLogIn}>Log In</HeaderText>
                                )}
                            </div>
                        </Header>
                    </Col>
                    <Col span={4} />
                </Row>
            </HeaderWrapper>
            <BodyWrapper>{children}</BodyWrapper>
            <FooterWrapper>
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <Footer> Created by PanicP</Footer>
                    </Col>
                    <Col span={4} />
                </Row>
            </FooterWrapper>
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
    height: 64px;
    justify-content: space-between;
    font-size: 32px;
    align-items: center;
`

const PrioHeaderText = styled.span`
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
`

const HeaderText = styled.span`
    margin-left: 24px;
    font-size: 24px;
    cursor: pointer;
`

const BodyWrapper = styled.div`
    width: 100%;
    min-height: calc(95vh - 128px);
`

const FooterWrapper = styled.div`
    height: 64px;
    border-top: 1px solid lightgrey;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    font-size: 16px;
`
