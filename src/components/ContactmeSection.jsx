import { motion } from 'framer-motion';
import { FaGithub, FaFile, FaLinkedin } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import pdf from "../assets/SKILLS.pdf"
const contactLinks = [
    { icon: <FaGithub className="lg:text-7xl text-5xl  " />, text: 'GitHub', href: 'https://github.com/Zer0-Dark' },
    { icon: <FaFile className="lg:text-7xl text-5xl " />, text: 'Resume', href: pdf },
    // { icon: <FaEnvelope className="lg:text-7xl text-5xl " />, text: 'E-mail', href: 'abdulrahman.elbedawey@gmail.com' },
    { icon: <FaLinkedin className="lg:text-7xl text-5xl " />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulrahman-elbedawey-5b20aa194/' },
];

const ContactComponent = () => {
    return (
        <div className="lg:h-[60vh] lg:pb-0 pb-10" id="contact">
            <SectionTitle title="Contact Me" num="03" />
            <div className="flex space-y-12 lg:space-y-0 lg:space-x-12 lg:flex-row flex-col w-full justify-center items-center text-3xl text-white">
                {contactLinks.map((link, index) => (
                    <motion.a
                        target='_blank'
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2, y: -10 }}
                        whileTap={{ scale: 1.2, y: -10 }}
                        href={link.href}
                        className="flex justify-center flex-col items-center hover:text-yelloow"
                    >
                        {link.icon}
                        <h1 className="mt-2">{link.text}</h1>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default ContactComponent;
