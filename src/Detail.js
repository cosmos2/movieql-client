import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETATIL } from "./queries";

// No css here.
const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  const id = Number(movieId);
  return (
    <Query query={MOVIE_DETATIL} variables={{ movieId: id }}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "somthing happend";
        return (
          <>
            {data.movie.title}
            {data.movie.rating}
            {data.movie.medium_cover_image}
            {data.movie.description_intro}
          </>
        );
      }}
    </Query>
  );
};

export default Detail;
