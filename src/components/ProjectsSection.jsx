import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projectsData from "../assets/projectsData.json"
import { useState } from "react";
function ProjectsSection() {
    let [data, setData] = useState(projectsData);
    let projectsList = data.map((project) => <ProjectCard
        name={project.name}
        img={project.img}
        key={project.id}
        github={project.github}
        live={project.live}
        paragraph={project.paragraph}
    />)

    let filterByList = ["HTML CSS", "JS", "REACT"];
    let style = "cursor-pointer font-normal py-2 px-4 ml-2 bg-grey2  text-sm text-yelloow rounded-md hover:bg-aqua hover:text-raisinBlack"
    let style2 = "cursor-pointer font-normal py-2 px-4 ml-2  text-sm  rounded-md bg-aqua text-raisinBlack"
    let [allprojetct, setAllProjects] = useState(true)
    let [filterList, setFilterList] = useState(filterByList.map((name) => (
        <div
            onClick={filterData}
            key={name} className={style}>{name}
        </div>
    )))



    function restButton() {
        setData(projectsData);

        setAllProjects(true);

        setFilterList(filterByList.map((name) => (
            <div
                onClick={filterData}
                key={name} className={style}>{name}
            </div>
        )))
    }


    function filterData(e) {
        setData(projectsData.filter(
            (project) => project.used.includes(e.target.innerHTML)))


        setFilterList(filterByList.map((name) => (
            <div
                onClick={filterData}
                key={name} className={e.target.innerHTML == name ? style2 : style}>{name}
            </div>
        )))

        setAllProjects(false)


    }
    return (
        <section id="projects" className="pb-12 px-4 w-full">
            <SectionTitle title="Recent Projects" num="02" />
            <div className=" flex flex-wrap gap-4 font-fira  items-center mb-8 ml-4  ">
                <h1 className="lg:text-2xl text-xl  text-meadow font-semibold ">Filter by /</h1>

                <button onClick={restButton} className={!allprojetct ? style : style2}>All Projects</button>

                {filterList}
            </div>
            <div className=" flex flex-wrap  justify-center gap-y-6  " >
                {projectsList}
            </div>
        </section>
    )
}

export default ProjectsSection