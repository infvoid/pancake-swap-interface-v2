import React from 'react'
import { useTranslation } from 'hooks/useI18n'
import { Route, useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const Ihos = () => {
  const { t } = useTranslation()
  const { path, url, isExact } = useRouteMatch()

  return (
    <>
      <Hero />
      <Container>
        <Flex justifyContent="center" alignItems="center" mb="32px">
          <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="subtle">
            <ButtonMenuItem as={Link} to={`${url}`}>
              {t('Next IHO')}
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${url}/history`}>
              {t('Past IHOs')}
            </ButtonMenuItem>
          </ButtonMenu>
        </Flex>
        <Route exact path={`${path}`}>
          <CurrentIfo />
        </Route>
        <Route path={`${path}/history`}>
          <PastIfo />
        </Route>
      </Container>
    </>
  )
}

export default Ihos
