import {Stack} from "expo-router";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen key="modal" name="Modal" options={{title: 'Modal', presentation: 'modal'}}/>
      <Stack.Screen key="index" name="index" options={{title: 'Modal Screen'}}/>
    </Stack>
  )
}
export default ModalLayout
