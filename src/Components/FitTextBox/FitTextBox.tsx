import React, { useRef, useEffect, ReactNode } from 'react'
import fitty from 'fitty'

export interface FitTextBoxProps {
  children: ReactNode
  component?: JSX.Element
}

const FitTextBox = ({ component, ...props }: FitTextBoxProps) => {
  const Component = component
  const textRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    fitty(textRef.current as HTMLElement, {
      multiLine: false
    })
  }, [])
  return (
    <Component
      ref={textRef}
      {...props}
    >
aas
    </Component>
  )
}

export default FitTextBox
