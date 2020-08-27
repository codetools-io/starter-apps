import { useMemo, useState } from 'react';
import { chain } from 'lodash';
import { Alert, Inbox, Checkmark, Cycle } from 'grommet-icons';
export default function useDashboard() {
  const [tasks] = useState([
    {
      id: 'task-1',
      title: 'a title for the task',
      description: 'a good bit of info about the task',
      status: 'status-1',
      project: 'project-1',
      context: 'context-1',
    },
    {
      id: 'task-2',
      title: 'a title for the second task',
      description: 'a good bit of info about the task',
      status: 'status-2',
      project: 'project-2',
      context: 'context-2',
    },
    {
      id: 'task-3',
      title: 'a title for the second task',
      description: 'a good bit of info about the task',
      status: 'status-3',
      project: 'project-3',
      context: 'context-3',
    },
    {
      id: 'task-4',
      title: 'a title for the second task',
      description: 'a good bit of info about the task',
      status: 'status-4',
      project: 'project-4',
      context: 'context-4',
    },
  ]);
  const [statuses] = useState([
    { id: 'status-1', name: 'Inbox', icon: Inbox },
    { id: 'status-2', name: 'Active', icon: Cycle },
    { id: 'status-3', name: 'Blocked', icon: Alert },
    { id: 'status-4', name: 'Complete', icon: Checkmark },
  ]);
  const [projects] = useState([
    {
      id: 'project-1',
      name: 'That Department',
      type: 'Public',
      context: 'context-1',
      progress: 50,
    },
    {
      id: 'project-2',
      name: 'Some Other Department',
      type: 'Private',
      context: 'context-2',
      progress: 75,
    },
    {
      id: 'project-3',
      name: 'One More Department',
      type: 'Private',
      category: 'category-3',
      progress: 75,
    },
    {
      id: 'project-4',
      name: 'Another Department',
      type: 'Public',
      category: 'category-4',
      progress: 25,
    },
  ]);
  const [contexts] = useState([
    { id: 'context-1', name: 'Home' },
    { id: 'context-2', name: 'Work' },
    { id: 'context-3', name: 'Vacation' },
    { id: 'context-4', name: 'School' },
  ]);
  const projectTypes = useMemo(() => {
    return chain(projects).uniqBy('type').map('type').value();
  }, [projects]);
  const contextsById = useMemo(() => {
    return chain(contexts).keyBy('id').value();
  }, [contexts]);
  const statusesById = useMemo(() => {
    return chain(statuses).keyBy('id').value();
  }, [statuses]);
  const projectsById = useMemo(() => {
    return chain(projects).keyBy('id').value();
  }, [projects]);

  const dashboard = useMemo(() => {
    return {
      projects,
      contexts,
      contextsById,
      statusesById,
      projectsById,
      projectTypes,
      statuses,
      tasks,
    };
  }, [
    projects,
    contexts,
    contextsById,
    projectsById,
    statusesById,
    projectTypes,
    statuses,
    tasks,
  ]);

  return dashboard;
}
