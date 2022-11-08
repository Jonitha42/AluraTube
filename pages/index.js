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
    height: 130px;
    width: 130px;
    box-shadow: 2px 4px 7px rgba(0,0,0,0.5);
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
  .user-info-title{
    font-size: 1.6rem;
  }
  .user-info-description{
    font-size: 1rem;
    color: #999;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div className="user-info-text">
          <h3 className="user-info-title">{config.name}</h3>
          <p className="user-info-description">{config.job}</p>
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