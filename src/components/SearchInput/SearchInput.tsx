import React, { useState, useMemo } from 'react'
import { Input } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
// import { useTranslation } from 'hooks/useI18n'
import { useTranslation } from 'hooks/useI18n'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
  border-radius: 2px;
  @media screen and (max-width: 800px) {
    padding: 0 5px;
    font-size: 12px;
  }
  border: solid 1px #444444;
  background-color: ${({ theme }) => (!theme.isDark ? '#ffffff' : '#000000')};
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback, placeholder = 'Search' }) => {
  const [toggled, setToggled] = useState(false)
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback]
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          value={searchText}
          onChange={onChange}
          placeholder={t(placeholder)}
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
