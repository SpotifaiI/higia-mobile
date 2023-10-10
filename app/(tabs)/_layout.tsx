import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { GradientMain } from "../../components/GradientMain";
import { colors } from "../../global/styles/theme";

export default function Layout() {
  return (
    <>
      <StatusBar style='light'/>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerBackground: () => (
            <GradientMain />
          ),
          headerTitleStyle: {
            color: colors.lighter
          },
          headerTitleAlign: 'center'
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarLabel: 'início',
            href: '/'
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: 'Tarefas',
            tabBarLabel: 'Tarefas',
            href: '/tasks'
          }}
        />
      </Tabs>
    </>
  );
}