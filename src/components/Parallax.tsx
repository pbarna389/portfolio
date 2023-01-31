import "../styles/components/Parallax.css"

interface ParallaxProps {
  url: string;
  section_name: string
}

const Parallax: React.FC<ParallaxProps> = ({ url, section_name="not added" }) => {
  return (
    <>
      <div className="parallax" style={{ backgroundImage: `url(${url})`}}>
        <div className="helper arrow-top-left"></div>
        <div className="helper arrow-top-right"></div>
        <div className="helper arrow-bottom-left"></div>
        <div className="helper arrow-bottom-right"></div>
        <div id={`#${section_name}`} className="section-name">{section_name}</div>
      </div>
    </>
  )
}

export default Parallax;