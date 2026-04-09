import React from 'react'
import { useTranslation } from 'react-i18next';

const MyUseTranslation = () => { 
    const { t, i18n } = useTranslation(); // t function translation ke liye use hota hai, i18n object se hum language change kar sakte hain

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Language change karne ke liye i18n ka changeLanguage method use karte hain
    }

  return (
    <div>
        <h2>{t('welcome')}</h2> {/* Translation ke liye t function ka use */}
        <button onClick={() => i18n.changeLanguage('en')}>{t('English')}</button> {/* English language ke liye button */}
        <button onClick={() => i18n.changeLanguage('hi')}>{t('Hindi')}</button> {/* Hindi language ke liye button */}
    </div>
  )
}

export default MyUseTranslation
