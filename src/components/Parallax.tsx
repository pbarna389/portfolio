import "../styles/components/Parallax.css"

interface ParallaxProps {
  url: string;
}

const Parallax: React.FC<ParallaxProps> = ({ url }) => {
  return (
    <>
      <div className="parallax" style={{ backgroundImage: `url(${url})`}}>
        <div className="helper arrow-top-left"></div>
        <div className="helper arrow-top-right"></div>
        <div className="helper arrow-bottom-left"></div>
        <div className="helper arrow-bottom-right"></div>
      </div>
    </>
  )
}

export default Parallax;