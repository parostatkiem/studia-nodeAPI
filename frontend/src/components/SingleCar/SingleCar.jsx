import React, { useContext } from 'react';
import './SingleCar.scss';
import { EventContext } from '../../App';

const SingleCar = ({ carToDisplay }) => {
  const deleteCar = id => {
    fetch('http://localhost:5000/api/car/' + id, {
      method: 'DELETE',
    })
      .then(() => fetchCars())
      .catch(error => console.error(error));
  };
  const fetchCars = useContext(EventContext);
  console.log(fetchCars);
  return (
    <div className="single-car">
      <span className="small">
        ID:
        {carToDisplay.id}
      </span>
      <span>{carToDisplay.brand}</span>
      <span>{carToDisplay.model}</span>
      <button className="btn-delete" onClick={() => deleteCar(carToDisplay.id)}>
        X
      </button>
    </div>
  );
};

export default SingleCar;
