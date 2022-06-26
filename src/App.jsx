import { useState } from 'react'
import styled from '@emotion/styled'


const Contenedor = styled.div`
  max-width: 900px;

`


const Heading = styled.h1`

  font-family: 'Lato', sans-serif;
  color: #FFF;

`


function App() {
  
  return (
    <Heading>
      <h1>Desde App</h1>
    </Heading>
  )
}

export default App
