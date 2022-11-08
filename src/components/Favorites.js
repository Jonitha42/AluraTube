import config from '../../config.json'
import styled from "styled-components"

const StyledFavorites = styled.div`
  padding: 0px 30px;
  .container{
    display: flex;
    gap: 64px;
    margin-top: 16px;

  }
  .group-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .description{
    font-weight: bold;
    font-size: 1.2rem;
  }
  img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    box-shadow: 2px 4px 7px rgba(0,0,0,0.5);
  }
`

const Favorites = ({ favorites }) => {
  const favoritesList = favorites
  return (
    <StyledFavorites >
      <section>
        <h2>Favorites</h2>
        <div className='container'>
          {favoritesList.map((favorites) => {
            return (
              <div className='group-container'>
                <img src={favorites.img} />
                <span className='description'>
                  {favorites.title}
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </StyledFavorites>
  )
}

export default Favorites