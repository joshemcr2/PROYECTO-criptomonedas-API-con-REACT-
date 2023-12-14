import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
background-color: #b7322c;
color: #fff;
padding: 14px;
font-size: 22px;
text-transform: uppercase;
font-family: 'lato', sans-serif;
font-weight: 700;
text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>
    {children}
    </Texto>
  )
}

export default Error