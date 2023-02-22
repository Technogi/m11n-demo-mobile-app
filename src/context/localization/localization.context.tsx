import React, { createContext, useState } from 'react'
import LocalizedStrings from 'react-native-localization'

// import { setCurrentLanguageStorage } from 'src/services/language/language.service'
import { es, en } from 'src/services/language/translations'

const languages = { en, es }

export const translations = new LocalizedStrings(languages)

type LocalizationContextProps = {
  translations?: typeof translations
  setAppLanguage?: (language: string) => void
  appLanguage?: string
  initializeAppLanguage?: (language: string) => void
}

/**
 * Constant used to get the variables and functions available by the LocalizationCtx component
 */
export const LocalizationContext = createContext<LocalizationContextProps>(null)

/**
 * Global context used to handle everything related to the language used by the app,
 * such as changing the current language, getting the current language, etc.
 *
 * @export
 * @param {{ children: JSX.Element }} props { children }
 * @returns {JSX.Element} JSX.Element
 */
export const LocalizationCtx = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [appLanguage, setAppLanguage] = useState<string>()

  const setLanguage = (language: string): void => {
    translations.setLanguage(language)
    setAppLanguage(language)
    // setCurrentLanguageStorage(language)
  }

  const initializeAppLanguage = async (currentLanguage: string): Promise<void> => {
    if (currentLanguage) setAppLanguage(currentLanguage)
  }

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}
