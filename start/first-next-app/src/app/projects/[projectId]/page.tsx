import Container from '@/app/components/container/container';
import { BASE_URL, GET_PROJECTS } from '@/constant/apiUrl';
import { Project } from '@/types/props';
import React from 'react'

async function page({params}: {params: {projectId : string}}) {

    const res = await fetch(BASE_URL +GET_PROJECTS+"/"+ params.projectId, {cache:'no-cache'})
                            .then((resp) => {
                              return resp.json();
                            })
                            .catch((err) => console.log(err));
    const project: Project = res.project;


  return (
    <Container>
        <div className='flex flex-col h-full w-full'>
            <div>{project.projectName}</div>
            <div>{project.projectDescription}</div>
            <div></div>
        </div>
    </Container>
  )
}

export default page