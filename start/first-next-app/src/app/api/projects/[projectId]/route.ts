import { getProjectById } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request : NextRequest, response: NextResponse) => {
    try{
        const projectId = request.url.split('projects/')[1];
        const project = await getProjectById(projectId.toString());
        return NextResponse.json({project}, {status:200});

    }catch(err){
        return NextResponse.json({message: 'error', err}, {status: 500});
    }
}