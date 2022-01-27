import { gql, useQuery } from '@apollo/client';
import './App.css';
import { Get_MatchesQuery } from './generated/graphql';

const MATCHES = gql`
 query get_matches($matchIds: [Int!]!){
    matches(matchIds: $matchIds){
    eventId
    nonLiveBoCount
  }
}
`

function App() {
  const {loading, error, data} = useQuery<Get_MatchesQuery>(MATCHES, {variables: {matchIds: [1018347896]}, errorPolicy: 'ignore'})

  if(loading){
    return(
      <p>loading...</p>
    )
  }

  if(error){
    console.log(error)
    console.log(data)
    return(
      <p>Errors :(</p>
    )
  }
  return (
    <div className="App">
     <section>
       {data.matches.map(event => {
       return <p key={event.eventId}>{event.nonLiveBoCount}</p>
     })}
     </section>
    </div>
  );
}

export default App;
