import React, { useState } from 'react';

export default function Home() {
  const [selectedLandmarkName, setSelectedLandmarkName] = useState("");
  const [landmarks, setLandmarks] = useState([
	{
      "name": "Memorial Belltower",
      "type": "Landmark",
      "lat": 35.7861412,
      "lon": -78.66350316,
      "photo_url": "https://live.staticflickr.com/8383/29084921961_ea9cd39fa2_z.jpg",
      "photo_source": "ncsuweb Flickr"
	},
	{
      "name": "Carter-Finley Stadium",
      "type": "Athletic Facility",
      "lat": 35.80083815,
      "lon": -78.71947722,
      "photo_url": "https://live.staticflickr.com/8274/30053461851_9a36d78a00_z.jpg",
      "photo_source": "ncsuweb Flickr"
    },
  ]);

  const listItems = landmarks.map(place => <li key={place.name}>{place.name}</li>);

  function LandmarkCard() {
	if (selectedLandmarkName === "") {
      return null;
	}
	else {
	  let landmarkDetails;
	  if (selectedLandmarkName === "Memorial Belltower") {
		landmarkDetails = landmarks[0];
	  }
	  else if (selectedLandmarkName === "Carter-Finley Stadium") {
		landmarkDetails = landmarks[1];
	  }
	  else {
		return (<><p>Not found</p></>);
	  }
      return (
	  	<>
	  	  <h1>{landmarkDetails.name}</h1>
	  	  <p>Latitude: {landmarkDetails.lat}</p>
	  	  <p>Longitude: {landmarkDetails.lon}</p>
	  	</>
	  );
	}
  }
  return (
    <>
		<div>
			<h1>NCSU Places</h1>
			<ul>
				{listItems}
			</ul>
			<input value={selectedLandmarkName}
				onChange={e => setSelectedLandmarkName(e.target.value)} />
			<LandmarkCard />
        </div>
    </>
  )
}
