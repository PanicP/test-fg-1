import React from 'react'
import { ClassicTemplate } from '../components/template'
import { RegisterPanel } from '../components/form'
import { FormLayout } from '../components/layout'

export const RegisterPage = () => (
    <ClassicTemplate>
        <FormLayout>
            <RegisterPanel />
        </FormLayout>
    </ClassicTemplate>
)
