import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export const SettingsStatistics: React.FC = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Estatísticas" }} />
      <Text>Configurações de Estatísticas</Text>
      {/* Adicione componentes e lógica específicos para Aparência aqui */}
    </View>
  );
};
