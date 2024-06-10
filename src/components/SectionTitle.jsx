/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

function SectionTitle({ title, num }) {

    return (
        <header className="flex w-full justify-center items-center p-12 ">
            <h1 before={num} className="font-fira relative text-3xl lg:text-5xl text-white font-bold after:content-[attr(before)] after:absolute after:text-yelloow after:-top-3 after:text-xl after:right-0">{title}</h1>
        </header>
    )
}

export default SectionTitle