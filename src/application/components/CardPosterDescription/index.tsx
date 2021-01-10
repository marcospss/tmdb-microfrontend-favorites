/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Poster, Content, Title, Overview, ActionsButtons } from './styles';
import ImagePlaceholder from '~/application/components/ImagePlaceholder';
import imageApi from '~/infrastructure/settings/imageApi';

import useFavoriteStore from '~/infrastructure/store';

type CardProps = {
  mediaId: number;
  posterPath: string;
  title: string;
  overview: string;
  mediaType: string;
  hideOverflowTitle: boolean;
};

const CardPosterDescription = ({ mediaId, posterPath, title, overview, mediaType, hideOverflowTitle }: CardProps): JSX.Element => {
  const { secure_base_url, poster_sizes } = imageApi;
  const Processedtitle = title.length > 27 && hideOverflowTitle ? `${title.substring(0, 26)}...` : title;
  const removeToFavorites = useFavoriteStore(store => store.actions.remove);

  return (
    <Card>
      <Title title={title}>
        <Link to={`/${mediaType}/${mediaId}`}>{Processedtitle}</Link>
      </Title>
      <Content>
        <Poster>
          {posterPath ? (
            <Link to={`/${mediaType}/${mediaId}`}>
              <img src={`${secure_base_url}${poster_sizes.w92}${posterPath}`} alt={title} />
            </Link>
          ) : (
            <ImagePlaceholder />
          )}
        </Poster>
        <Overview>{overview}</Overview>
      </Content>
      <ActionsButtons>
        <Link className='action' to={`/${mediaType}/${mediaId}`} title={title}>
          Learn More
        </Link>
        <button type='button' onClick={() => removeToFavorites(mediaId)} title={title}>
          Delete
        </button>
      </ActionsButtons>
    </Card>
  );
};
export default CardPosterDescription;
