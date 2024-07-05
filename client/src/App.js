import { useQuery, gql} from '@apollo/client';
import './App.css';




const query  = gql`
  query GetAllTodos {
    getTodos {
      title
      completed
    }
  }


`

function App() {

  const {data, loading} = useQuery(query)

  return (
    <div className="App">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <table>
            <tbody>
              {
                data.getTodos.map(todo => 
                  <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.completed}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
