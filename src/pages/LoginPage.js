import React from 'react'
import { LoginPanel } from '../components/auth'
import { LoginLayout } from '../components/layout'
import { ClassicTemplate } from '../components/template'

export const LoginPage = () => (
    <ClassicTemplate>
        <LoginLayout>
            <LoginPanel />
        </LoginLayout>
    </ClassicTemplate>
)
