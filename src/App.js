import React, { useState } from 'react';
import {useQuery, gql, NetworkStatus, useLazyQuery} from '@apollo/client';

const EXCHANGE_RATES = gql `
query GetDogs {
  dogs {
    id
    breed
  }
}
`;

const GET_DOG_PHOTO = gql`
query Dog($breed: String!) {
  dog(breed: $breed) {
    id
    displayImage
  }
}
`;


function Dogs({onDogSelected}) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
    return (
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map(dog => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    );
}

function DogPhoto({breed}) {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    // pollInterval: 500,
    notifyOnNetworkStatusChange:true
  });

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
          <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} alt={data.dog.name} />
    <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );

}

function DelayedQuery() {
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data && data.dog && <img src={data.dog.displayImage} alt={data.dog.name} />}
      <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
        Click me!
      </button>
    </div>
  );
}



function App() {
  const [dogBreed, setDogBreed] = useState(null);

  function onDogSelected({ target }) {
    setDogBreed(target.value);
  }

  return (
      <div>
        <h2>My first Apollo app <span role="img" aria-label="Rocket">🚀</span></h2>
        <Dogs onDogSelected={onDogSelected}></Dogs>
        {dogBreed && <DogPhoto breed={dogBreed} ></DogPhoto>}
        <DelayedQuery/>
      </div>
  );
}

export default App;
