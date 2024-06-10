/* eslint-disable react/prop-types */
import { motion, spring } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaEye, FaArrowDown } from "react-icons/fa"
function ProjectCard({ name, paragraph, live, github, img }) {

    let [showMoreInfo, setShowMoreInfo] = useState(false)

    return (

        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className=" shadow-md bg-grey2 lg:w-[29%] w-fit  mx-4 py-1 pl-1  rounded-lg relative group  ">

            <button onClick={() => setShowMoreInfo((prev) => !prev)}>
                <div className="pb-10 w-full">
                    <img src={img} alt="project img"></img>
                </div>


                <div className=" overflow-hidden absolute bottom-0 w-[calc(100%_-_4px)] bg-grey2 rounded-b-lg ">
                    <h1 className=" flex  justify-between items-center group-hover:rounded-none rounded-lg   bg-meadow p-2 font-bold text-raisinBlack rounded-l-lg rounded-t-none z-8 text-xl">
                        {name}

                        <FaArrowDown className={showMoreInfo ? "" : "rotate-180"} />


                    </h1>

                    {showMoreInfo &&
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={spring}
                            className=" group-hover:block  bg-grey2 rounded-b-lg  ">

                            <p className=" p-1 h-14 text-white overflow-hidden bg-grey2">{paragraph}</p>

                            <div className=" bg-grey2  text-4xl text-white   flex justify-around pb-4 rounded-lg">
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.2 }}
                                    href={github}>

                                    <FaGithub className="cursor-pointer hover:text-yelloow" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.2 }}
                                    href={live}>
                                    <FaEye className="cursor-pointer hover:text-yelloow" />
                                </motion.a>
                            </div>

                        </motion.div>
                    }


                </div>

            </button>
        </motion.div >
    )
}

export default ProjectCard