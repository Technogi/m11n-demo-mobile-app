export enum ErrorType {
  LOGIN = 'Login',
  DEFAULT = 'Default',
  NO_DATA = 'NoData',
  GRAPHQL = 'Query',
}

const connectionErrorMessage = ', please try again'

export const errorMessage = {
  LOGIN: `An error has occurred in the Login${connectionErrorMessage}`,
  DEFAULT: `An unexpected error occurred${connectionErrorMessage}`,
  NO_DATA: `There is no information in your search${connectionErrorMessage}`,
  GRAPHQL: `An error occurred in the query${connectionErrorMessage}`,
}
