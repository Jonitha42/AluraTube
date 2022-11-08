import styled from "styled-components"
import config from "../../config.json"
const StyledBanner = styled.div`
img{
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}
`

const Banner = () => {
  return (
    <StyledBanner>
      <div className="container">
        <img src={config.banner} />
      </div>
    </StyledBanner>
  )
}

export default Banner