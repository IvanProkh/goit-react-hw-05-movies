// import { searchCastImage } from '../Cast/Cast';

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getMovieCast, searchImages } from '../services/searchApi';
import { CastList, EmptyCast } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(cast);
    console.log(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length !== 0 ? (
        <CastList>
          {cast.map(({ cast_id, character, name, profile_path }) => {
            const profileImage = searchImages(profile_path);
            return (
              <div key={cast_id}>
                <img src={profileImage} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            );
          })}
        </CastList>
      ) : (
        <EmptyCast>
          ❗❗❗Sorry, it seems that there is currently no information about the
          actors❗❗❗
        </EmptyCast>
      )}
    </>
  );
};
