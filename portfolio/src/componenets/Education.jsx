import { useContext } from "react";
import { DataContext } from "../common/DataContext";

function Education() {
    const data = useContext(DataContext);
    if (!data) {
        return <div>Loading....</div>
    }
    const education = data.education.map((school, i) => <div key={i} className="shadow-2xl rounded-lg">
        <div id="education" className="p-4 text-md font-medium rounded-t-xl text-red-500">
            <h3>{school.school}</h3>
            <h4>{school.level}</h4>
            <h4>{school.degree}</h4>
            <h5 className="text-sm text-black text-right" >{school.from} - {school.to} </h5>
        </div>
    </div>);

    return (
        <div className="p-4 mt-4 container mx-auto">
            <h1 className="text-center text-3xl font-semibold">Education</h1>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {education}
            </div>
        </div>
    );
}

export default Education