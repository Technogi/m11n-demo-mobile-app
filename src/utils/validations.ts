/**
 * Valid that a number meets the minimum and maximum length of digits
 *
 * @param {*} min minimum number of digits
 * @param {*} max maximum number of digits
 * @returns {RegExp} Regex Expression (true / false)
 */
export const isNumberLength = (min: number, max: number): RegExp => new RegExp(`^[0-9]{${min},${max}}$`)
// Minimum six characters
export const passwordValidate = /^.{6,}$/
export const isLetterOrDot = /^[A-Za-zÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ. ]*$/
export const isEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Validate that the input text is a valid url
 *
 * @returns {RegExp} Regex Expression
 */
export const isUrlValid = new RegExp(
  '^(https?:\\/\\/)' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i',
)
/**
 * Valid that a string is URL
 *
 * @param {*} s textinput string
 * @returns {boolean} (true / false)
 */
export const isValidHttpUrl = (s: string): boolean => {
  let url
  try {
    url = new URL(s)
  } catch (e) {
    return false
  }
  return /https?/.test(url.protocol)
}
