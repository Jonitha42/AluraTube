import styled from "styled-components"

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
        <img src={"https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"} />
      </div>
    </StyledBanner>
  )
}

export default Banner