import React from 'react';

import useFavoriteStore from '~/infrastructure/store';
import CardPosterDescription from '~/application/components/CardPosterDescription';

import { Main, Container, EmptyList, GridList, Title } from './styles';

const Recommendations = (): JSX.Element => {
  const { medias } = useFavoriteStore(store => store.state);
  const mediaType = 'movies';
  const hasMedias = medias?.length > 0;

  return (
    <Main>
      <Container>
        <Title>Favorites List</Title>
        {!hasMedias ? (
          <EmptyList>There are no favorites in the list</EmptyList>
        ) : (
          <GridList>
            {medias?.map(item => (
              <CardPosterDescription
                key={item.id}
                mediaId={item.id}
                posterPath={item.poster_path}
                title={item.title}
                overview={item.overview}
                mediaType={mediaType}
                hideOverflowTitle
              />
            ))}
          </GridList>
        )}
      </Container>
    </Main>
  );
};

export default Recommendations;
