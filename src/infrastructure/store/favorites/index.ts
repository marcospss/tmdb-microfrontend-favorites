/* eslint-disable camelcase */
import create from 'zustand';
import produce from 'immer';

type mediaItem = {
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

type State = {
  state: {
    medias: mediaItem[];
  };
  actions: {
    add: (media: mediaItem) => void;
    remove: (mediaId: number) => void;
  };
};

const initialState = {
  medias: [],
};

const useFavoriteStore = create<State>(set => {
  const setState = fn => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    actions: {
      add(media) {
        setState(({ state }) => {
          const hasID = !state.medias.find(({ id }) => id === media.id);

          if (hasID) {
            state.medias.push(media);
          }
        });
      },
      remove(mediaId) {
        setState(({ state }) => {
          const hasID = !!state.medias.find(({ id }) => id === mediaId);

          if (hasID) {
            state.medias = state.medias.filter(({ id }) => {
              return id !== mediaId;
            });
          }
        });
      },
    },
  };
});

export default useFavoriteStore;
