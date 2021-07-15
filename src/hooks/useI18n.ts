import { useCallback, useContext } from 'react'
import { TranslationsContext } from 'hooks/TranslationsContext'
import { getTranslation } from 'utils/translateTextHelpers'

const useI18n = () => {
  const { translations } = useContext(TranslationsContext)

  /**
   * As a temporary fix memoize the translation function so it can be used in an effect.
   * It appears the TranslationsContext is always empty and is not currently used
   * TODO: Figure out if the context is used and if not, remove it.
   */
  return useCallback(
    /**
     *
     * @param translationId 语言包的key
     * @param fallback 语言包的value
     * @returns
     */
    (translationId: number, fallback: string) => {
      /* if (translations[0] === 'error') {
        return fallback
      } */
      // if (translations.length > 0) {
      return getTranslation(translations, translationId, fallback)
      /*  }
      return fallback */
    },
    [translations]
  )
}
export const useTranslation = () => {
  const { translations } = useContext(TranslationsContext)

  return {
    t: useCallback(
      (fallback: string,key=fallback) => {
        // console.log(fallback)
        // console.log(key)
        return getTranslation(translations, 0, fallback,key)
      },
      [translations]
    ),
  }
}
export default useI18n
