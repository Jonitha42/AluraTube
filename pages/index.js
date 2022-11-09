import React from "react";
import styled from "styled-components"
import config from "../config.json"
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import Favorites from "../src/components/Favorites";

const HomePage = () => {

  const [valorDoFiltro, setValorDoFiltro] = React.useState("")

  return (
    <>
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
        <Banner />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlist={config.playlist} />
        <Favorites favorites={config.favorites} />
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
  }& a{
    color: ${({ theme }) =>
    theme.textColorBase
  };
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

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div className="user-info-text">
          <a href="https://www.linkedin.com/in/jonathan-e-pardo/" target="_blank">
            <h3 className="user-info-title">{config.name}</h3>
            <p className="user-info-description">{config.job}</p>
          </a>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = ({ searchValue, ...propiedades }) => {
  const playlistNames = Object.keys(propiedades.playlist)
  return (
    <StyledTimeline >
      {playlistNames.map((playlistName) => {
        const videos = propiedades.playlist[playlistName]
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
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


