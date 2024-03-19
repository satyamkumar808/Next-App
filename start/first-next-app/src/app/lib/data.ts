import {Project} from '@/types/props';
let projects: Project[] = [
    {projectId: 1, projectDescription: "Project descpription 1", projectName: "Dotnet core API"},
    {projectId: 2, projectDescription: "Project descpription 2", projectName: "React js"},
    {projectId: 3, projectDescription: "Project descpription 3", projectName: "Angular js"},
    {projectId: 4, projectDescription: "Project descpription 4", projectName: "Next js"},
    {projectId: 5, projectDescription: "Project descpription 5", projectName: "Multi layered dotnet core web api"}
];

export const getProjects = async () => await projects;

export const getProjectById = async (projectId: any) => await projects.find(p => p.projectId == projectId);
