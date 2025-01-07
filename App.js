import 'react-native-gesture-handler'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigation from './src/navigation/MainNavigation'
import ListProductScreen from './src/screens/ListProductScreen'
import EmptyProduct from './src/components/EmptyProduct'
import DetailProductScreen from './src/screens/DetailProductScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import EditProfilScreen from './src/screens/EditProfileScreen'
import ChangePasswordScreen from './src/screens/ChangePasswordScreen'
import HistoryScreen from './src/screens/HistoryScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <SignUpScreen/>
    </SafeAreaProvider>
  )
}

export default App