import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset.js";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <Menu />
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
        <Banner />
        <Header />
        <Timeline playlist={config.playlist} />
      </div>
    </>
  );
}

export default HomePage


const StyledHeader = styled.div`
  img{
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }
  .user-info{
    align-items: center;
    display: flex;
    gap: 32px;
    margin-top: 20px;
    padding: 16px 32px;
    width: 100%;
  }
  .user-info-text{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div className="user-info-text">
          <h3>{config.name}</h3>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = (propiedades) => {
  const playlistNames = Object.keys(propiedades.playlist)
  return (
    <StyledTimeline >
      {playlistNames.map((playlistName) => {
        const videos = propiedades.playlist[playlistName]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}