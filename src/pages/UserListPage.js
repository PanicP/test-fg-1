import React from 'react'
import { UserList } from '../components/user'
import { ClassicTemplate } from '../components/template'
import { TableLayout } from '../components/layout'

export const UserListPage = () => (
    <ClassicTemplate>
        <TableLayout>
            <UserList />
        </TableLayout>
    </ClassicTemplate>
)
