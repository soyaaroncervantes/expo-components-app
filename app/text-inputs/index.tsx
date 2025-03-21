import ThemeView from "@/presentation/theme/View";
import {useState} from "react";
import ThemeCard from "@/presentation/theme/Card";
import ThemeText from "@/presentation/theme/Text";
import ThemeTextInput from "@/presentation/theme/Input";
import {KeyboardAvoidingView, Platform, ScrollView} from "react-native";

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemeView margin fullScreen className="gap-4">
          <ThemeCard compact={true} shadow className='gap- 2'>
            <ThemeTextInput
              placeholder="Nombre completo"
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={text => setForm({...form, name: text})} value={form.name}/>

            <ThemeTextInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={text => setForm({...form, email: text})} value={form.email}/>

            <ThemeTextInput
              placeholder="Número de teléfono"
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={text => setForm({...form, phone: text})} value={form.phone}/>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>
          <ThemeCard shadow>
            <ThemeText type='label'>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard>
            <ThemeTextInput
              placeholder="Número de teléfono"
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={text => setForm({...form, phone: text})} value={form.phone}/>
          </ThemeCard>
        </ThemeView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
