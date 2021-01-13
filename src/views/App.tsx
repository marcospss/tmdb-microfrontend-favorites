import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFavoriteStore from '~/infrastructure/store';

import favorites from '../../favorites.json';

import FavoriteButton from '~/application/components/FavoriteButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
  }
`;

const App = (): JSX.Element => {
  const [localFavorites, setLocalFavorites] = useState([]);
  const { medias } = useFavoriteStore(store => store.state);
  const hasMedias = medias?.length > 0;

  useEffect(() => {
    setLocalFavorites(favorites);
  }, []);
  const renderFavoritesListOrMessage = () => {
    if (localFavorites.length === 0) {
      return <h4>No Favorites</h4>;
    }
    return localFavorites.map(favorite => (
      <div key={favorite.id}>
        <h2>{favorite.title}</h2>
        <FavoriteButton media={favorite} />
      </div>
    ));
  };

  return (
    <Wrapper>
      <div>
        <h1>Favorites { process.env.NAME_APPLICATION }</h1>
        {renderFavoritesListOrMessage()}
      </div>

      <div>
        <h2>Store</h2>
        {!hasMedias ? <h4>There are no favorites in the list</h4> : null}
        {medias?.map(media => (
          <div key={media.id}>
            <h2>{media.title}</h2>
            <p>{media.overview}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default App;
