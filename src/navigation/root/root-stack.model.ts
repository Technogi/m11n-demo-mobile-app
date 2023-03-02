export enum RootNavName {
  AUTH = 'Auth',
  MAIN_TABS = 'MainTabs',
}

export type RootStackParamList = {
  [RootNavName.AUTH]: undefined
  [RootNavName.MAIN_TABS]: undefined
}
