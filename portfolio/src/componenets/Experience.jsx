import { useContext } from "react";
import JobCard from "./JobCard";
import { DataContext } from "../common/DataContext";

function Experience() {
    const data = useContext(DataContext);
    if (!data) {
        return <div>Loading....</div>
    }
    const jobCards = data.experience.map((job) => <JobCard job={job} key={job.company}/>)
    return (
        <div id="experience" className="p-4 mt-4 container mx-auto">
            <h1 className="text-center text-3xl font-semibold">Professional Experience</h1>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {jobCards}
            </div>
        </div>
    );
}

export default Experience
