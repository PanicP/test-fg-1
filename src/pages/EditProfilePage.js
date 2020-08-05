import React from 'react'
import { ClassicTemplate } from '../components/template'
import { EditProfilePanel } from '../components/form'
import { FormLayout } from '../components/layout'

export const EditProfilePage = ({ match, location }) => (
    <ClassicTemplate>
        <FormLayout>
            <EditProfilePanel uid={match.params.uid} />
        </FormLayout>
    </ClassicTemplate>
)
