import { useEffect, useState } from 'react'



const GithubUsers = () => {
  const url = 'https://api.github.com/users';
  const [gitUser, SetgitUser] = useState([]);


  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    SetgitUser(data);
    console.log(data);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (

    <div className='--bg-primary --py2'>
      <div className="container">
        <header>
          <div className="--text-center --text-light">GitHub Users</div>
          <div className="--line"></div>
        </header>
        <div  className="--grid-25 --py">
          {gitUser.map((user) => {
            const {id,avatar_url, login, html_url} = user;
            return (
              <div key={id} className="--card --bg-light --p --flex-start">
                <img src={avatar_url} alt={login}
                  className='--profile-img --mx' />
                <span>
                  <h4>{login}</h4>
                  <a href={html_url}>View Profile</a>
                </span>
              </div>
            )
          })
          }

        </div>
      </div>
    </div>
  )
}

export default GithubUsers