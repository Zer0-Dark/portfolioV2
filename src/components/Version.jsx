/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react"

function Version({ ver }) {
    let [showMoreInfo, setShowMoreInfo] = useState();
    return (
        <div>
            <div
                onClick={() => setShowMoreInfo((prev) => !prev)}
                className=" cursor-pointer font-roboto font-semibold text-white text-xl text-right pr-2" >
                Version: {ver}
            </div>
            {
                showMoreInfo &&
                <motion.div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center">
                    <div className="w-[40%] h-[70%] bg-teal">
                        <button onClick={() => setShowMoreInfo((prev) => !prev)}>
                            x
                        </button>
                        <h1>whats new ?</h1>

                    </div>
                </motion.div>
            }

        </div>
    )
}

export default Version;