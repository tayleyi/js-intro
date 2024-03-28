import React, { useState, useEffect } from 'react';
import "./styles.css";

export default function Home() {
  const [places, setPlaces] = useState(null);
  const [currentLandmark, setCurrentLandmark] = useState("");

  useEffect(() => {
    async function fetchData() {
      fetch('http://localhost:8080', {
        mode: 'cors',
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        setPlaces(data);
      })}
      fetchData();
    }, []);

  function LandmarkSelection() {
    if (places === null) {
      return <p>Waiting...</p>;
    }

  const listItems = places.map((name, index) => <option key={index}>{name}</option>);
  const dropdown = (
    <>
       <select value={currentLandmark} onChange={e => updateLandmark(e.target.value)} >
     	  <option label=" "></option>
     	  {listItems}
       </select>
    </>);

    return dropdown;
  }

  async function updateLandmark(name) {
      fetch('http://localhost:8080/place/' + name, {
          mode: 'cors',
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        }
      ).then(response => response.json())
      .then(data => {
        setCurrentLandmark(data);
      });
  }

  function LandmarkCard() {
    if (currentLandmark === "") {
      return null;
    }
    return (
      <>
        <h1>{currentLandmark.name}</h1>
        <p>Location: ({currentLandmark.lat}, {currentLandmark.lon})</p>
        <img src={currentLandmark.photo_url}
        	alt={`Image of ${currentLandmark.name} from ${currentLandmark.photo_source}`}/>
      </>);
  }

  return (
    <>
        <div>
            <h1>NCSU Places</h1>
            <LandmarkSelection />
            <LandmarkCard />
        </div>
    </>
  )
}
