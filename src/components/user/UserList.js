/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { callGetUsers } from '../../features/user/userAPI'
import { Space, Table } from 'antd'
import { history } from '../../history'

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const _users = await callGetUsers()
            setUsers(_users)
        }
        getUsers()
    }, [])

    const handleEditUser = (email) => {
        history.push(`/user/${email}`)
    }

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            width: '100px',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '100px',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '50px',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            width: '100px',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '200px',
        },
        {
            title: 'Sub-district',
            dataIndex: 'subDistrict',
            key: 'subDistrict',
            width: '100px',
        },
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
            width: '100px',
        },
        {
            title: 'Province',
            dataIndex: 'province',
            key: 'province',
            width: '100px',
        },
        {
            title: 'Postal Code',
            dataIndex: 'postalCode',
            key: 'postalCode',
            width: '100px',
        },
        {
            title: '',
            key: 'edit',
            width: '100px',
            render: (text, record) => (
                <Space size="middle">
                    <a
                        onClick={() => {
                            handleEditUser(record.email)
                        }}
                    >
                        <span>Edit</span>
                    </a>
                </Space>
            ),
        },
    ]

    return (
        <div>
            <Table dataSource={users} columns={columns} pagination={false} locale={{ emptyText: '. . .' }} />
        </div>
    )
}
