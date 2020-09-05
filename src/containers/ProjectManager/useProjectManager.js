import { useMemo, useState } from 'react';
import { chain } from 'lodash';
import * as data from 'data';
export default function useDashboard() {
  const [projects] = useState(data.projectManager.projects);
  const [categories] = useState(data.projectManager.categories);
  const [statuses] = useState(data.projectManager.statuses);
  const [tasks] = useState(data.projectManager.tasks);
  const [projectId, setProjectId] = useState();
  const projectTypes = useMemo(() => {
    return chain(projects).uniqBy('type').map('type').value();
  }, [projects]);
  const categoriesById = useMemo(() => {
    return chain(categories).keyBy('id').value();
  }, [categories]);
  const projectsById = useMemo(() => {
    return chain(projects).keyBy('id').value();
  }, [projects]);
  const project = useMemo(() => {
    return projectsById[projectId];
  }, [projectId, projectsById]);
  const tasksByProjectId = useMemo(() => {
    return chain(tasks).groupBy('projectId').value();
  }, [tasks]);
  const projectTasks = useMemo(() => {
    return tasksByProjectId?.[projectId];
  }, [projectId, tasksByProjectId]);
  const projectTasksByStatusId = useMemo(() => {
    return chain(projectTasks).groupBy('statusId').value();
  }, [projectTasks]);

  return useMemo(() => {
    function openProject(id) {
      setProjectId(id);
    }
    return {
      project,
      projectId,
      categories,
      categoriesById,
      projects,
      projectTasks,
      projectTasksByStatusId,
      projectTypes,
      statuses,
      tasks,
      tasksByProjectId,
      openProject,
    };
  }, [
    project,
    projectId,
    categories,
    categoriesById,
    projects,
    projectTasks,
    projectTasksByStatusId,
    projectTypes,
    statuses,
    tasks,
    tasksByProjectId,
  ]);
}
