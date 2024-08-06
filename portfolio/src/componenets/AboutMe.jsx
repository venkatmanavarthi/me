import { useContext } from 'react';
import { DataContext } from '../common/DataContext';

function AboutMe() {
    const data = useContext(DataContext);
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mt-14 container mx-auto flex justify-center items-center">
                <img className="rounded-full max-w-[200px] max-h-[200px]" src={data.about.pic} alt="Venkat Rao Manavarthi's Profile Pic" />
            </div>
        </>
    );
}

export default AboutMe