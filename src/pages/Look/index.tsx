import React from 'react';
import './index.css'
// import useI18n from 'hooks/useI18n'
import { useTranslation } from "hooks/useI18n"


const Look = () => {
  // const TranslateString = useI18n()
  const { t } = useTranslation()
  return (
    <div className="look">
      {/* {t("Coming Soon !")} */}
      {/* {t("Coming Soon !")} */}
      {t('%error% %error2% - Please try again.', { error: "错误",error2: "错误" })}
    </div>
  )
}

export default Look
