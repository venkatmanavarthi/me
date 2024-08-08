function JobCard(props) {
    const workItems = props.job.work.map((work, i) => <li key={i}>{work}</li>);

    return (
        <div className="shadow-2xl rounded-lg">
            <div className="p-4 text-md font-medium rounded-t-xl text-red-500">
                <h3>{props.job.company}</h3>
                <h4>{props.job.title}</h4>
                <h5 className="text-sm text-black text-right" >{props.job.from} - {props.job.to} <span title={ props.job.locationTitle}>{ props.job.location }</span></h5>
            </div>
            {/* <div className="p-4 text-md font-normal">
                { props.job.summary }
            </div> */}
            <div className="p-2 pr-1 pb-4 pl-6  rounded-b-xl bg-clip-border text-md font-normal">
                <ul className="list-disc">
                    { workItems }
                </ul>
            </div>
        </div>
    );
}


export default JobCard