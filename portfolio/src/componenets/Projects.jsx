import { useContext } from "react";
import Project from "./Project";
import { DataContext } from "../common/DataContext";

function Projects(props) {
    const data = useContext(DataContext);
    if(!data){
        return <div>Loading....</div>
    }
    const projects = data.projects.map((project, i) => <Project key={i} project={project} />)
    return (
        <div id="projects" className="p-4 mt-4 container mx-auto">
            <h1 className="text-center text-3xl font-semibold">Projects</h1>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                { projects }
            </div>
        </div>
    );
}

export default Projects
