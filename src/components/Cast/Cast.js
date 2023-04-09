// import { searchCastImage } from '../Cast/Cast';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ThreeCircles } from 'react-loader-spinner';
import { ThreeCirclesStyle } from '../../components/services/spinner';
import { toastError } from '../../components/services/toasts';
import { DelayedRender } from '../services/DelayedRender';

import { getMovieCast, searchImages } from '../services/searchApi';
import { CastList, EmptyCast } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [showEmptyCast, setShowEmptyCast] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    let timeoutId;
    setLoading(true);

    async function fetchData() {
      try {
        const res = await getMovieCast(movieId);
        setCast(res.cast);
      } catch (error) {
        toastError();
      }

      timeoutId = setTimeout(() => setLoading(false), 300);
    }

    fetchData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [movieId]);

  return (
    <>
      {loading && <ThreeCircles {...ThreeCirclesStyle} />}
      {cast && cast.length > 0 ? (
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
        <DelayedRender delay={300}>
          <EmptyCast>
            ❗❗❗Sorry, it seems that there is currently no information about
            the actors❗❗❗
          </EmptyCast>
        </DelayedRender>
      )}
    </>
  );
}
