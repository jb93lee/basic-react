import React from 'react'
import Button from './Button'

const Counter = () => {
  return (
    <div>
        <h1>0</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
        <Button />
        <Button />
        </div>
    </div>
  )
}

export default Counter