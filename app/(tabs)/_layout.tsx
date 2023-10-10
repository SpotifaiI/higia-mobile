import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
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
  );
}