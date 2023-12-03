import { PropsWithChildren, createContext, useEffect, useState } from 'react';

import { TasksAPI } from '../api/tasks/tasks';
import { taskStatus } from '../api/tasks/tasks.constants';
import { OrderedTasks, Task } from '../api/tasks/tasks.model';

export type TaskActions = 'play' | 'pause' | 'finish';
export type TasksProviderProps = PropsWithChildren;
export type TasksContextData = {
  tasks: Task[];
  orderedTasks: OrderedTasks;
  pendingTasksCount: number;
  activeTasksCount: number;
  concludedTasksCount: number;
  changeStatus: (action: TaskActions, taskId: string) => void;
};

export const TasksContext = createContext({} as TasksContextData);

export function TasksProvider({
  children
}: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [orderedTasks, setOrderedTasks] =
    useState<OrderedTasks>({} as OrderedTasks);
  const [pendingTasksCount, setPendingTasksCount] = useState(0);
  const [activeTasksCount, setActiveTasksCount] = useState(0);
  const [concludedTasksCount, setConcludedTasksCount] = useState(0);

  useEffect(() => {
    getTasksList();
  }, []);

  async function getTasksList() {
    const tasksAPI = new TasksAPI();
    const tasksFromAPI = await tasksAPI.getTasks();

    updateTasks(tasksFromAPI);
  }

  function updateTasks(tasksList: Task[]) {
    const tasksAPI = new TasksAPI();
    const orderedTasksFromAPI = tasksAPI.orderTasks(tasksList);

    setTasks(tasksList);
    setOrderedTasks(orderedTasksFromAPI);
    setPendingTasksCount(orderedTasksFromAPI.pending.length);
    setActiveTasksCount(orderedTasksFromAPI.active.length);
    setConcludedTasksCount(orderedTasksFromAPI.concluded.length);
  }

  function changeStatus(action: TaskActions, taskId: string) {
    let statusToDefine = taskStatus.active;

    switch (action) {
      case 'play':
        statusToDefine = taskStatus.active;
        break;

      case 'pause':
        statusToDefine = taskStatus.pending;
        break;

      case 'finish':
        statusToDefine = taskStatus.concluded;
        break;
    }

    const changedTasks: Task[] = [];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.status = statusToDefine;
      }

      changedTasks.push(task);
    });

    updateTasks(changedTasks);
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      orderedTasks,
      pendingTasksCount,
      activeTasksCount,
      concludedTasksCount,
      changeStatus
    }}>
      {children}
    </TasksContext.Provider>
  );
}