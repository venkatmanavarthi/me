function Project(props) {
    const projectItems = props.project.work.map((work, i) => <li key={i}>{work}</li>);

    return (
        <div className="shadow-2xl rounded-lg">
            <div className="p-4 text-md font-medium bg-clip-border rounded-t-xl text-red-500">
                <h3>{props.project.title}</h3>
                <h4>{props.project.type}</h4>
            </div>
            <div className="p-4 text-md font-normal">
                { props.project.summary }
            </div>
            <div className="p-4 rounded-b-xl bg-clip-border text-md font-normal">
                <ul>
                    { projectItems }
                </ul>
            </div>
        </div>
    );
}

export default Project
