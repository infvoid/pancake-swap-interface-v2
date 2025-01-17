import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Card, CommunityIcon, Flex, Heading, PrizeIcon, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import { Team } from 'config/constants/types'

interface TeamCardProps {
  rank: number
  team: Team
}

const getBackground = (theme: DefaultTheme) => {
  if (theme.isDark) {
    return 'linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)'
  }

  return 'linear-gradient(177deg, rgb(184, 228, 255) 0%,  rgb(243, 239, 233) 100%)'
}

const TeamRank = styled.div`
  align-self: stretch;
  background: ${({ theme }) => getBackground(theme)};
  flex: none;
  padding: 16px 0;
  text-align: center;
  width: 56px;
`

const Body = styled.div`
  align-items: start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    align-items: center;
    flex-direction: row;
    font-size: 40px;
  }
`

const Info = styled.div`
  flex: 1;
`

const Avatar = styled.img`
  border-radius: 50%;
`

const TeamName = styled(Heading).attrs({ as: 'h3' })`
  font-size: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
  }
`

const MobileAvatar = styled.div`
  flex: none;
  margin-right: 8px;

  ${Avatar} {
    height: 64px;
    width: 64px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const DesktopAvatar = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    margin-left: 24px;

    ${Avatar} {
      height: 128px;
      width: 128px;
    }
  }
`

const StyledTeamCard = styled(Card)`
  display: flex;
  margin-bottom: 16px;
`

const TeamCard: React.FC<TeamCardProps> = ({ rank, team }) => {
  const { t } = useTranslation()
  const avatar = <Avatar src={`/images/teams/${team.images.md}`} alt="team avatar" />

  return (
    <StyledTeamCard>
      <TeamRank>
        <Text bold fontSize="24px">
          {rank}
        </Text>
      </TeamRank>
      <Body>
        <Info>
          <Flex alignItems="center" mb="16px">
            <MobileAvatar>{avatar}</MobileAvatar>
            <TeamName>{t(team.name)}</TeamName>
          </Flex>
          <Text as="p" color="textSubtle" pr="24px" mb="16px">
            {t(team.description)}
          </Text>
          <Flex>
            <Flex>
              {/* alignSelf for Safari fix */}
              <PrizeIcon width="24px" mr="8px" style={{ alignSelf: 'center' }} />
              <Text fontSize="24px" bold>
                {team.points.toLocaleString()}
              </Text>
            </Flex>
            <Flex ml="24px">
              {/* alignSelf for Safari fix */}
              <CommunityIcon width="24px" mr="8px" style={{ alignSelf: 'center' }} />
              <Text fontSize="24px" bold>
                {team.users.toLocaleString()}
              </Text>
            </Flex>
          </Flex>
        </Info>
        <Button as={Link} to={`/teams/${team?.id}`} variant="secondary" scale="sm">
          {t('See More')}
        </Button>
        <DesktopAvatar>{avatar}</DesktopAvatar>
      </Body>
    </StyledTeamCard>
  )
}

export default TeamCard
