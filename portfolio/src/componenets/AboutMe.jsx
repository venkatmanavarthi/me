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
            <div id="about" className="p-4 mt-14 container mx-auto flex flex-col justify-center items-center max-w-5xl">
                <img className="rounded-full max-w-[200px] max-h-[200px] shadow-xl" src={data.about.pic} alt="Venkat Rao Manavarthi's Profile Pic" />
                <p className="p-4 mt-4 text-justify bg-white rounded-xl shadow-lg">Hello and welcome! I’m happy to have you here. <br/> { data.about.p1 } <br/><br/> { data.about.p3 }</p>
                <ul className="mt-4 p-4 flex justify-center space-x-2 bg-white rounded-xl shadow-lg">
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