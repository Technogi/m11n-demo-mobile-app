import { NativeStackScreenProps } from '@react-navigation/native-stack'

// ==================================== Screens Names ===================================================
export enum RootNavName {
  AUTH = 'Auth',
  MAIN_TABS = 'MainTabs',
}

export enum AuthNavName {
  LOGIN = 'Login',
}

// ==================================== Stack Param List ================================================
export type RootStackParamList = {
  [RootNavName.AUTH]: undefined
  [RootNavName.MAIN_TABS]: undefined
}

export type AuthStackParamList = {
  [AuthNavName.LOGIN]: undefined
}

// ====================== Stack Screen Props (e.g. navigation, route props) =============================
export type HomeNavProps = NativeStackScreenProps<RootStackParamList, RootNavName.HOME>
