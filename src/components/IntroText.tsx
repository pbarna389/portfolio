import "../styles/components/IntroText.css";

interface IntroTextProps {
    header: string,
    text: string,
};

const IntroText:React.FC<IntroTextProps> = ({ header, text }) => {

    const headerText:string[] = [...header];
    const firstLetter:string = headerText.splice(0, 1).join();

  return (
    <div className="text-wrapper">
      <h1> 
        <span>{firstLetter}</span>
        {headerText.join("")}
      </h1>
      <p className="sub-text">{text}</p>
    </div>
  )
}

export default IntroText