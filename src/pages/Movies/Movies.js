import { useEffect, useState } from 'react';
import { searchMovies } from '../../components/services/searchApi';

import { FilmsList } from '../../components/FilmsList/FilmsList';
// import { toastError } from 'components/services/toasts';
import { ThreeCircles } from 'react-loader-spinner';
import { ThreeCirclesStyle } from '../../components/services/spinner';

// import { Box } from '../../components/Box';
import { MoviesForm } from './Movies.styled';
// import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    searchMovies(query).then(res => {
      console.log(res);
      setloading(true);
      setTimeout(() => {
        searchMovies(query)
          .then(res => {
            console.log(res);
            setMovies(res.results);
          })
          .catch(error => {
            console.log('ОЙОЙОЙОЙ', error);
            // toastError();
          })
          .finally(() => {
            setloading(false);
          });
      }, 300);
    });
  }, [query]);

  return (
    <>
      <main style={{ flexGrow: '1' }}>
        <MoviesForm
          onSubmit={event => {
            event.preventDefault();
            setQuery(event.currentTarget.querySelector('input').value);
            console.log(query);
          }}
        >
          <div>
            <input
              text="text"
              autoComplete="off"
              autoFocus
              type="search"
              // onChange={event => setQuery(event.currentTarget.value)}
              placeholder="SEARCH MOVIE..."
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </button>
          </div>
          {loading && <ThreeCircles {...ThreeCirclesStyle} />}
          {movies !== false && <FilmsList data={movies} />}
        </MoviesForm>
      </main>
    </>
  );
};

//

// export const Movies = () => {
//   // const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [loading, setloading] = useState(false);

//   const [searchParams, setSearchParams] = useSearchParams();

//   const searchQuery = searchParams.get('searchQuery');

//   useEffect(() => {
//     if (!searchQuery) {
//       // setSearchParams([]);
//       return;
//     }

//     searchMovies(searchQuery)
//       .then(res => {
//         console.log(res);
//         setloading(true);

//         setTimeout(() => {
//           console.log(res);
//           setMovies(res.results);
//         }, 300);
//       })
//       .catch(error => {
//         console.log('ОЙОЙОЙОЙ', error);
//         // toastError();
//       })
//       .finally(() => {
//         setloading(false);
//       });
//   }, [searchQuery]);

//   return (
//     <>
//       <main style={{ flexGrow: '1' }}>
//         <MoviesForm
//           onSubmit={event => {
//             event.preventDefault();
//             setSearchParams({
//               searchQuery: event.currentTarget.querySelector('input').value,
//             });
//             console.log(searchQuery);
//           }}
//         >
//           <input
//             text="text"
//             autoComplete="off"
//             autoFocus
//             type="search"
//             // onChange={event => setQuery(event.currentTarget.value)}
//             placeholder="SEARCH MOVIE..."
//           />
//           <button type="submit">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               fill="currentColor"
//               viewBox="0 0 32 32"
//             >
//               <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
//             </svg>
//           </button>
//           {loading && <ThreeCircles {...ThreeCirclesStyle} />}
//           {movies !== null && <FilmsList data={movies} />}
//         </MoviesForm>
//       </main>
//     </>
//   );
// };
