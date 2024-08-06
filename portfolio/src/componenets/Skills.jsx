import { useContext } from "react";
import { DataContext } from "../common/DataContext";

function Skills() {
    const data = useContext(DataContext);
    if (!data) {
        return <div>Loading....</div>
    }
    const skills = data.skills.map((skill, i) => <li className="shadow-2xl hover:shadow p-2 bg-red-400 inline-block rounded" key={i}>{ skill }</li>)

    return (
        <div className="p-4 mt-4 container mx-auto max-w-6xl">
            <h1 className="text-center text-3xl font-semibold">Skills</h1>
            <ul className="mt-4 flex flex-wrap font-medium justify-center space-x-5 text-white">
                {skills}
            </ul>
        </div>
    );
}

export default Skills
