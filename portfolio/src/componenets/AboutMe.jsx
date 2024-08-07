import { useContext } from 'react';
import { DataContext } from '../common/DataContext';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';

function AboutMe() {
    const data = useContext(DataContext);
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
            <div className="p-4 mt-14 container mx-auto flex flex-col justify-center items-center max-w-6xl">
                <img className="rounded-full max-w-[200px] max-h-[200px]" src={data.about.pic} alt="Venkat Rao Manavarthi's Profile Pic" />
                <p className="mt-4 text-justify">{ data.about.summary }</p>
                <ul className="flex justify-center space-x-2">
                    <li>
                        <a href={data.social.linkedin} target='_blank'>
                            <img className="w-10" src={linkedin} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href={data.social.github} target='_blank'>
                            <img className="w-10" src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href={"mailto:" + data.social.email}>
                            <img className="w-10" src={email} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href={"tel:+1" + data.social.phone}>
                            <img className="w-10" src={phone} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
    );
}

export default AboutMe