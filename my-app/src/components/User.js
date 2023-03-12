
const User = (props) => {
  const {
    firstName,
    lastName,
    school,
    email,
    profilePicture,
    classLevel,
  } = props.user;

  return (
    <>
    <img src={profilePicture} alt={firstName} />
    <div class = 'list-item'>
    <ul>
    <li><h4>Full Name: </h4> <p>{firstName} {lastName}</p></li>
    <li><h4>Class Level: </h4><p style = {{color: classLevel === 'Freshman' ? 'green': 'black'}}>{classLevel}</p></li>
    <li><h4>School: </h4><p>{school}</p></li>
    <li><h4>Email:</h4><p>{email}</p></li>
    </ul>
    </div>
    <hr></hr>
    </>
  );
};

export default User;
