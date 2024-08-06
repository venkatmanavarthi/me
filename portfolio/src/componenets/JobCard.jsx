function JobCard(props) {
    const workItems = props.job.work.map((work, i) => <li key={i}>{work}</li>);

    return (
        <div className="shadow-2xl rounded-xl hover:shadow">
            <div className="p-4 text-md font-medium rounded-t-xl text-red-500">
                <h3>{props.job.company}</h3>
                <h4>{props.job.title}</h4>
                <h5 className="text-sm text-black text-right" >{props.job.from} - {props.job.to}</h5>
            </div>
            <div className="p-4 text-md font-normal">
                { props.job.summary }
            </div>
            <div className="p-4 rounded-b-xl bg-clip-border text-md font-normal">
                <ul>
                    { workItems }
                </ul>
            </div>
        </div>
    );
}


export default JobCard