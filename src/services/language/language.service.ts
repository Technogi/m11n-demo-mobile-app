// import AsyncStorage from '@react-native-async-storage/async-storage'
import LocalizedStrings from 'react-native-localization'

// import { storage } from 'src/utils/constants'
// import { promiseTryCatch } from 'src/utils/helpers'
import { es, en } from 'src/services/language/translations'

const languages = { en, es }

export const translations = new LocalizedStrings(languages)

/**
 * Function used to set current language to app storage
 *
 * @export
 * @param {string} language language available in the app (e.g. es, en)
 */
// export const setCurrentLanguageStorage = (language: string): void => {
//   promiseTryCatch(AsyncStorage.setItem(storage.APP_LANGUAGE, language), 'Error setCurrentLanguage')
// }

/**
 * Function used to get current language stored in app
 *
 * @export
 * @returns {Promise<string>} Promise with current language stored in app (e.g. es, en)
 */
// export const getCurrentLanguageStorage = async (): Promise<string> => {
//   // await AsyncStorage.removeItem(storage.APP_LANGUAGE)
//   const [appLanguage] = await promiseTryCatch(AsyncStorage.getItem(storage.APP_LANGUAGE), 'Error getCurrentLanguage')

//   return appLanguage
// }
