import Version from "./Version"

function Footer() {
    return (
        <footer className="">
            <Version ver="2.0" incoming={{ a: "adding the", b: "etc" }} />
        </footer>
    )
}

export default Footer;