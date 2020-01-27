import React, { useRef, useEffect, ReactNode } from 'react'
import fitty from 'fitty'

export type FittyOptions = {
    minSize?: number
    maxSize?: number
    multiLine?: boolean
}

export interface FitTextBoxProps {
  children: ReactNode
  component? : React.ElementType
  fittyOptions?: FittyOptions
}

const FitTextBox = ({ component, fittyOptions, ...props }: FitTextBoxProps) => {
  const Component = component || 'div'
  const textRef = useRef<HTMLElement>(null)
  useEffect(() => {
    fitty(textRef.current as HTMLElement, fittyOptions)
  }, [])
  return (
    <Component
      ref={textRef}
      component={component}
      {...props}
    >
    </Component>
  )
}

export default FitTextBox
