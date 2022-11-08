import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset.js";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
        <Menu />
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
    height: 80px;
    width: 80px;
  }
  .user-info{
    align-items: center;
    display: flex;
    gap: 24px;
    margin-top: 75px;
    padding: 16px 32px;
    width: 100%;
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