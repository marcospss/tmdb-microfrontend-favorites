/* eslint-disable camelcase */
import React, { memo, useCallback } from 'react';

import useFavoriteStore from '~/infrastructure/store';

import Button from './styles';

type Props = {
  media: {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: false;
    vote_average: string;
  };
};

const FavoriteButton = ({ media }: Props): JSX.Element => {
  const { id: mediaId } = media;
  const addToFavorites = useFavoriteStore(store => store.actions.add);
  const removeToFavorites = useFavoriteStore(store => store.actions.remove);
  const { medias } = useFavoriteStore(store => store.state);
  const hasInCollection = useCallback(() => !!medias?.find(({ id }) => id === mediaId), [mediaId, medias]);

  return (
    <>
      {!hasInCollection() ? (
        <Button className='add' type='button' onClick={() => addToFavorites(media)}>
          ADD
        </Button>
      ) : (
        <Button className='remove' type='button' onClick={() => removeToFavorites(mediaId)}>
          REMOVE
        </Button>
      )}
    </>
  );
};

export default memo(FavoriteButton);
