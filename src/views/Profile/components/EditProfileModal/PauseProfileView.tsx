import React, { useState } from 'react'
import { AutoRenewIcon, Button, Checkbox, Flex, InjectedModalProps, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import useGetProfileCosts from 'hooks/useGetProfileCosts'
import { useAppDispatch } from 'state'
import { useProfile } from 'state/hooks'
import { fetchProfile } from 'state/profile'
import useToast from 'hooks/useToast'
import { getBalanceNumber } from 'utils/formatBalance'
import { useProfile as useProfileContract } from 'hooks/useContract3'
import { useWeb3React } from '@web3-react/core'

type PauseProfilePageProps = InjectedModalProps

const PauseProfilePage: React.FC<PauseProfilePageProps> = ({ onDismiss }) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const { profile } = useProfile()
  const { numberCakeToReactivate } = useGetProfileCosts()
  const { t } = useTranslation()
  const pancakeProfileContract = useProfileContract()
  const { account } = useWeb3React()
  const { toastSuccess, toastError } = useToast()
  const dispatch = useAppDispatch()

  const handleChange = () => setIsAcknowledged(!isAcknowledged)

  const handleDeactivateProfile = async () => {
    const tx = await pancakeProfileContract.pauseProfile()
    setIsConfirming(true)
    const receipt = await tx.wait()
    if (receipt.status) {
      // Re-fetch profile
      await dispatch(fetchProfile(account))
      toastSuccess(t('Profile Paused!'))
      onDismiss()
    } else {
      toastError(t('Error'))
      setIsConfirming(false)
    }
  }

  if (!profile) {
    return null
  }

  return (
    <>
      <Text as="p" color="failure" mb="24px">
        {t('This will suspend your profile and send your Collectible back to your wallet')}
      </Text>
      <Text as="p" color="textSubtle" mb="24px">
        {t(
          "While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile",
        )}
      </Text>
      <Text as="p" color="textSubtle" mb="24px">
        {t('Cost to reactivate in the future: %cost% HD', { cost: getBalanceNumber(numberCakeToReactivate) })}
      </Text>
      <label htmlFor="acknowledgement" style={{ cursor: 'pointer', display: 'block', marginBottom: '24px' }}>
        <Flex alignItems="center">
          <Checkbox id="acknowledgement" checked={isAcknowledged} onChange={handleChange} scale="sm" />
          <Text ml="8px">{t('I understand')}</Text>
        </Flex>
      </label>
      <Button
        width="100%"
        isLoading={isConfirming}
        endIcon={isConfirming ? <AutoRenewIcon spin color="currentColor" /> : null}
        disabled={!isAcknowledged || isConfirming}
        onClick={handleDeactivateProfile}
        mb="8px"
      >
        {t('Confirm')}
      </Button>
      <Button variant="text" width="100%" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </>
  )
}

export default PauseProfilePage
