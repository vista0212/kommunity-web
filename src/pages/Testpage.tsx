import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { IMAGE } from '../lib/graphql/query/User';
import { GET_BOARD, Board } from '../lib/graphql/query/Board';

const Testpage = () => {
  const [text, setText] = useState('');
  const [board, setBoard] = useState<Board[]>([]);

  const [image] = useMutation(IMAGE);

  const token = localStorage.getItem('accessToken');

  const { error, data } = useQuery(GET_BOARD, {
    variables: {
      token,
    },
  });

  if (error) {
    console.log(error.graphQLErrors);
    return <div>error</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          {data.boards.map((board: Board) =>
            board.content.split('\n').map((text) => {
              return (
                <div>
                  {text}
                  <br />
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div>null</div>
      )}
    </div>
  );
};

export default Testpage;
