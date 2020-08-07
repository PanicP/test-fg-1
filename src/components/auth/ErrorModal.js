import React from 'react'
import { Modal } from 'antd'

export const ErrorModal = ({ error }) => {
    function errorModal() {
        Modal.error({
            title: 'There is something wrong.',
            content: error
        })
    }

    return <div>{errorModal()}</div>
}
