import React from 'react'
import Image from "next/image";

const Hero = () => {

    const skills = [
        { name: "HTML5", icon: "/images/html.png" },
        { name: "CSS3", icon: "/images/css3.png" },
        { name: "JavaScript", icon: "/images/javascript.png" },
        { name: "React", icon: "/images/react2.png" },
        { name: "Tailwind CSS", icon: "/images/tailwind.png" },
        { name: "Next.js", icon: "/images/nextjs.png" },
    ];

    const projects = [
        { name: "Random password generator", img: "/images/pwd.png", github: "https://github.com/rahulnandg/password-app" },
        { name: "Random advice generator", img: "/images/advice2.png", github: "https://github.com/rahulnandg/advice-generater" },
        { name: "Sneakers ecommerce page", img: "/images/shoe.png", github: "https://github.com/rahulnandg/shoe-app2" },
    ];


    return (
        <div className="bg-[#004d40] text-white min-h-screen">
            <nav className="fixed top-0 left-0 w-full bg-[#002d26] bg-opacity-90 p-4 shadow-lg z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">PORTFOLIO.</h1>
                    <ul className="flex gap-6">
                        {["About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <section id="about" className="flex items-center justify-center min-h-screen pt-16 text-center">
                <div>
                    <div className="w-40 h-40 rounded-full bg-gray-300 mb-6 overflow-hidden mx-auto">
                        <Image src="/images/photo.png" width={160} height={160} alt="Your Photo" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-3xl font-semibold">Hey there, It&apos;s Rahul here. I&apos;m a Frontend Developer</h2>
                    <p className="text-gray-300 mt-2 max-w-lg mx-auto">
                        and am passionate about building beautiful & functional web experiences using Next.js and Tailwind CSS.
                    </p>
                </div>
            </section>

            <section id="skills" className="max-w-6xl mx-auto mt-12 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-6">Skills</h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-opacity-10 p-5 shadow-lg backdrop-blur-md hover:scale-110 transition-transform duration-300">
                            <Image src={skill.icon} width={100} height={100} alt={skill.name} className="mt-10 rounded-lg" />
                            <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className="max-w-6xl mx-auto mt-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <a key={index} href={project.github} target="_blank" rel="noopener noreferrer" className="bg-opacity-10 p-5 rounded-lg shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 flex justify-center flex-col items-center">
                            <Image src={project.img} width={300} height={200} alt={project.name} className="w-full h-40 object-cover rounded-lg hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                        </a>
                    ))}
                </div>
            </section>

            <section id="resume" className="mt-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Resume</h2>
                <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-4 rounded-lg shadow-lg backdrop-blur-md ">
                    <div>
                        <Image src="/images/resume.png" width={600} height={500} alt="Resume" className="w-full h-auto rounded-lg " />
                    </div>
                </div>
            </section>

            <section id="contact" className="mt-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Contact</h2>
                <p className="text-lg text-gray-300">Email: rahulnandagopal91@gmail.com</p>
                <p className="text-lg text-gray-300">Phone number: 9714500761</p>
            </section>

            <footer className="mt-12 text-center text-gray-400 pb-6">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://github.com/rahulnandg" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/github.png" width={32} height={32} alt="GitHub" className="hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-nandagopal/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/linkedin.png" width={32} height={32} alt="LinkedIn" className="hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} RAHUL. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Hero