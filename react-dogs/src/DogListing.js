import React, { Component } from 'react';
import Dog from './Dog'
import walmartDog from './dogs/dog3.jpg'
import branchDog from './dogs/dog2.jpg'
import branchDogLarge from './dogs/dog1.jpg'
import './App.css';

class DogListing extends Component {
    render() {
        let desc = "Description here";
      return (
          <div>
            <ul>
                <Dog title='Branch Manager' index={1} img={branchDogLarge} description={desc} /> 
                <Dog title='Assistant Branch Manager' index={2} img={branchDog} description={desc} />
                <Dog title='Walmart Greeter' index={3} img={walmartDog} description={desc} />
            </ul>
            <button type="button">Submit a dog - coming eventually</button>
        </div>
      );
    }
  }

  export default DogListing;