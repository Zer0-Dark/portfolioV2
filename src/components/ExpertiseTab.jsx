/* eslint-disable react/prop-types */
import { FaArrowDown, FaWindowClose } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
function ExpertiseTab({ name, paragraph, moreinfo, link, moreinfo1, link1 }) {


    let [showsection, setShowSection] = useState(false);
    let variants = {
        hidden: { opacity: 0, y: -100, x: 250, scale: 0 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 }
    }

    return (

        <motion.div


            className="w-full flex justify-center flex-col items-center mb-8 overflow-hidden " >
            <motion.div
                whileTap={{ scale: 0.99 }}
                onClick={() => { setShowSection((prev) => !prev) }}
                className=" cursor-pointer overflow-hidden lg:w-[60%] w-[80%] text-raisinBlack font-bold lg:text-2xl text-xl bg-meadow p-4 rounded-t-lg  flex  justify-between items-center ">
                <h1>{name}</h1>
                <div>
                    {!showsection && <FaArrowDown />}
                    {showsection && <FaWindowClose />}
                </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
                {
                    showsection &&
                    <motion.div
                        className={`lg:w-[60%] w-[80%]   bg-grey2 p-4 text-white  rounded-b-lg   `}
                        variants={variants}
                        initial="hidden"
                        animate={showsection == true ? "visible" : "hidden"}
                        exit="hidden"
                        transition={{ type: "spring", stiffness: 300, damping: 24, duration: 0.5 }}


                    >
                        {paragraph}

                        {moreinfo && <motion.div
                            initial={{ y: 250, scale: 0.2 }}
                            animate={{ y: 0, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", duration: 0.5 }}
                            className="lg:flex lg:justify-between block ">
                            <a target="_blank" className=" hover:text-aqua block  text-yelloow lg:text-right mt-2 " href={link}>
                                {moreinfo}
                            </a>
                            {moreinfo1 &&
                                <a target="_blank" className=" hover:text-aqua block text-yelloow lgtext-left mt-2 " href={link1}>
                                    {moreinfo1}
                                </a>
                            }

                        </motion.div>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div >
    )
}

export default ExpertiseTab