import React, { useCallback, useState } from 'react'
// import { HelpCircle as Question } from 'react-feather'
import { HelpCircleIcon } from "@pancakeswap-libs/uikit"
import styled from 'styled-components'
import Tooltip from '../Tooltip'

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  background: none;
  outline: none;
  cursor: default;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  color: ${({ theme }) => theme.colors.textSubtle};

  :hover,
  :focus {
    opacity: 0.7;
  }
`

export default function QuestionHelper({ text }: { text: string }) {
  const [show, setShow] = useState<boolean>(false)

  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])

  return (
    <span style={{ marginLeft: 4 }}>
      <Tooltip text={text} show={show}>
        <QuestionWrapper onClick={open} onMouseEnter={open} onMouseLeave={close}>
          {/* <Question size={16} /> */}
          <HelpCircleIcon width="20px" height="20px" />
        </QuestionWrapper>
      </Tooltip>
    </span>
  )
}
