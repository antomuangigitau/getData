import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApiItems } from './feature/apiSlice';
import { FaEdit } from 'react-icons/fa';
function App() {
  const { isLoading, items } = useSelector((state) => state.api);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiItems());
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="app">
      <div className="container">
        <div className="inner__container">
          {items.slice(0, 30).map((item) => {
            const { _id: id, name, occupation, email, bio } = item;
            return (
              <div className="make__grid" key={id}>
                <div className="inner__grid">
                  <div className="header">
                    <h4>{name}</h4>
                    <p>{occupation}</p>
                  </div>
                  <p className="email">{email}</p>
                  <div className="btn__flex">
                    <p>{bio}</p>
                    <button type="button">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
