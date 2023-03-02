export enum MainTabsNavName {
  HOME_TAB = 'HomeTab',
  SALES_TAB = 'SalesTab',
}

export type MainTabsStackParamList = {
  [MainTabsNavName.HOME_TAB]: undefined
  [MainTabsNavName.SALES_TAB]: undefined
}
