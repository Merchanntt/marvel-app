import AsyncStorage from '@react-native-async-storage/async-storage'
import Reactron from 'reactotron-react-native'

Reactron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()