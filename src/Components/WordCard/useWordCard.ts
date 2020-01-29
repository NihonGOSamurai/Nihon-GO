import { WordCardProps } from './WordCard'
import { useState } from 'react'

export const useWordCard = ({ word, onModifyMenuClick, onDeleteMenuClick }: WordCardProps) => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null)
  return {
    menuAnchorElement,
    handleMenuClick: ({ currentTarget }: React.MouseEvent<HTMLElement>) => setMenuAnchorElement(currentTarget),
    handleClose: () => setMenuAnchorElement(null),
    handleModifyMenuClick: () => onModifyMenuClick(word),
    handleDeleteMenuClick: () => onDeleteMenuClick(word),
    isOpened: Boolean(menuAnchorElement)
  }
}
