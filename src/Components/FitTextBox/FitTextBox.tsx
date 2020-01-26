import React, { useRef, useEffect, ReactNode } from 'react'
import fitty from 'fitty'

export interface FitTextBoxProps {
  children: ReactNode
  component? : React.ElementType
}

const FitTextBox = ({ component, ...props }: FitTextBoxProps) => {
  const Component = component || 'div'
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
    />
  )
}

export default FitTextBox
