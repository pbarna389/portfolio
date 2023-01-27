import "../styles/layout/Main.css";


interface MainProps {
    text: string
};

const Main:React.FC<MainProps> = ({ text }):JSX.Element => {
    return (
        <>
            <h1> {text} </h1>
            <section>
                Main Text
            </section>
        </>
    )
}

export default Main