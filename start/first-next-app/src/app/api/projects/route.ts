import { getProjects } from "@/app/lib/data"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    try{
        const projects = await getProjects();
        return NextResponse.json({projects}, {status: 200});
    }
    catch(err){
        return NextResponse.json({err}, {status:500});
    }
}