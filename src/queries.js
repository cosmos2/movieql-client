import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(rating: 7, limit: 50) {
      id
      title
      genres
      medium_cover_image
      rating
    }
  }
`;

export const MOVIE_DETATIL = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      genres
      rating
      medium_cover_image
      description_intro
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;
