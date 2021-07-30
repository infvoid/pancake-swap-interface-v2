import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { usePriceCakeBusd } from 'state/hooks'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import links from './config'
import kolinks from './koconfig'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const TranslateString = useI18n()
  const priceData = usePriceCakeBusd()
  const cakePriceUsd = priceData.toNumber()
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={(selectedLanguage?.code || '') === 'ko' ? kolinks : links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      profile={profile}
      connectTitle={TranslateString(1, "Connect to a wallet")}
      learnConnect={TranslateString(1, "Learn how to connect")}
      {...props}
    />
  )
}

export default Menu
