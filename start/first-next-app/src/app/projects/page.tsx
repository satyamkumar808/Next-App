import { Project } from '@/types/props'
import React from 'react'
import ProjectCard from '../components/projectCard/projectCard'
import Container from '../components/container/container'
import { BASE_URL, GET_PROJECTS } from '@/constant/apiUrl';

async function ProjectsPage() {
    const res = await  fetch(BASE_URL + GET_PROJECTS, {method: 'GET', cache: 'no-store'});
    const projects: {projects:Project[]} = await res.json();

  return (
    <Container>
        <div className="flex flex-row flex-wrap bg-light h-lvh justify-between items-center">
            {projects.projects.map((project: Project, index: number) => {
                return (
                    <ProjectCard key={index}  {...project}/>
                )
            })}
        </div>
    </Container>
  )
}

export default ProjectsPage