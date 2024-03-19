import { Project } from '@/types/props'
import Link from 'next/link';
import React from 'react'

function ProjectCard(projectCardProp : Project) {
    const {projectId, projectName, projectDescription} = projectCardProp;
  return (
    <Link href={"/projects/"+projectId.toString()} className="max-w-sm rounded overflow-hidden shadow-lg backdrop-blur-xl">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{projectName}</div>
                    <p className="text-gray-300 text-base">
                        {projectDescription}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                </div>
    </Link>
  );
}

export default ProjectCard