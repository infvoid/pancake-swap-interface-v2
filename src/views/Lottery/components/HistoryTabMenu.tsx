import React from 'react'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="subtle">
      <ButtonMenuItem>{t('Your History')}</ButtonMenuItem>
      <ButtonMenuItem>{t('All History')}</ButtonMenuItem>
    </ButtonMenu>
  )
}

export default HistoryTabMenu
