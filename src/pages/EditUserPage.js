import React from 'react'
import { ClassicTemplate } from '../components/template'
import { EditUserPanel } from '../components/form'
import { FormLayout } from '../components/layout'

export const EditUserPage = ({ match, location }) => (
    <ClassicTemplate>
        <FormLayout>
            <EditUserPanel email={match.params.email} />
        </FormLayout>
    </ClassicTemplate>
)
