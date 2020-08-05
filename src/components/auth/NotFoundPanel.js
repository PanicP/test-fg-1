import React from 'react'
import styled from 'styled-components'

export const NotFoundPanel = () => {
    return (
        <div>
            <NotFoundText>404 | Not Found</NotFoundText>
        </div>
    )
}

const NotFoundText = styled.div`
    font-size: 96px
`