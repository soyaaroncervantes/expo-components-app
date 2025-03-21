import ThemeView from "@/presentation/theme/View";
import {Alert} from "react-native";
import ThemeButton from "@/presentation/theme/Button";

const AlertsScreen = () => {
  const createTwoButtonsAlert = () => Alert.alert(
    'Alert Title',
    'Alert message with 2 buttons',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ok', onPress: () => console.log('Ok Pressed')},
    ]
  );

  const createThreeButtonsAlert = () => Alert.alert(
    'Alert Title',
    'Alert message with 2 buttons',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later Pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Ok', onPress: () => console.log('Ok Pressed')},
    ]
  );


  return (
    <ThemeView margin fullScreen className="gap-4">
      <ThemeButton
        bordered
        color='primary'
        onPress={createTwoButtonsAlert}>2-Buttons Alert</ThemeButton>
      <ThemeButton bordered onPress={createThreeButtonsAlert}>3-Buttons Alert</ThemeButton>
    </ThemeView>
  );
};
export default AlertsScreen;
