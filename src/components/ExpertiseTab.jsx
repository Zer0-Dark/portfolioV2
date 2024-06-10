/* eslint-disable react/prop-types */
import { FaArrowDown, FaWindowClose } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"
function ExpertiseTab({ name, paragraph, moreinfo, link, moreinfo1, link1 }) {
    let [showsection, setShowSection] = useState(false);
    let [animiationDone, setAnimationDone] = useState(false);



    // eslint-disable-next-line no-unused-vars
    let [variants, setVariants] = useState({
        hidden: { opacity: 0, y: -100, x: 250, scale: 0 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 }
    })

    function changeSection() {
        setShowSection((prev) => !prev)
        setAnimationDone(true)

    }
    return (

        <motion.div


            className="w-full flex justify-center flex-col items-center mb-8 overflow-hidden " >
            <motion.div
                whileTap={{ scale: 0.99 }}
                onClick={changeSection}
                className=" cursor-pointer overflow-hidden lg:w-[60%] w-[80%] text-raisinBlack font-bold lg:text-2xl text-xl bg-meadow p-4 rounded-t-lg  flex  justify-between items-center ">
                <h1>{name}</h1>
                <div>
                    {!showsection && <FaArrowDown />}
                    {showsection && <FaWindowClose />}
                </div>
            </motion.div>

            {
                animiationDone &&
                <motion.div
                    className={`lg:w-[60%] w-[80%]   bg-grey2 p-4 text-white  rounded-b-lg   `}
                    variants={variants}
                    initial="hidden"
                    animate={showsection == true ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 300, damping: 24, duration: 0.5 }}
                    onAnimationComplete={() => {
                        if (!showsection) {
                            setAnimationDone(false)
                        }
                    }

                    }

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
        </motion.div >
    )
}

export default ExpertiseTab