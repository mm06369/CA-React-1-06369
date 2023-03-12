
import './App.css';
import users from './users';

function App() {
  return (
        <>
          {users.map((user) => (
            <>
              <img src={user.profilePicture} alt={user.firstName} />
              <div class = 'list-item'>
              <ul>
              <li><h4>Full Name: </h4> <p>{user.firstName} {user.lastName}</p></li>
              <li><h4>Class Level: </h4><p style = {{color: user.classLevel === 'Freshman' ? 'green': 'black'}}>{user.classLevel}</p></li>
              <li><h4>School: </h4><p>{user.school}</p></li>
              <li><h4>Email:</h4><p>{user.email}</p></li>
              </ul>
              </div>
              <hr></hr>
            </>
          ))}
        </>
      );
}

export default App;
