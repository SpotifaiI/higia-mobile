import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { GradientMain } from "../../components/GradientMain";
import { TabBarIcon, iconMap } from "../../components/TabBarIcon";
import { colors } from "../../global/styles/theme";

export default function Layout() {
  return (
    <>
      <StatusBar style='light'/>
      <Tabs
        initialRouteName="index"
        screenOptions={({navigation, route}) => ({
          headerBackground: () => (
            <GradientMain />
          ),
          headerTitleStyle: {
            color: colors.lighter
          },
          headerTintColor: colors.main1,
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            borderTopEndRadius: 16,
            borderTopStartRadius: 16
          },
          tabBarActiveTintColor: colors.main1,
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
              case 'index':
                iconName = 'home';
                break;

              case 'tasks':
                iconName = 'map-pin';
                break;

              case 'user':
                iconName = 'user';
                break;

              case 'settings':
                iconName = 'settings';
                break;
            }

            return (
              <TabBarIcon
                focused={focused}
                size={32}
                iconName={iconName as iconMap}
              />
            );
          }
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            href: '/'
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: 'Mapa de Tarefas',
            href: '/tasks'
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: 'Perfil do Usuário',
            href: '/user'
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Configurações',
            href: '/settings'
          }}
        />
      </Tabs>
    </>
  );
}