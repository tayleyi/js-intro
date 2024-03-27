import React, { useState } from 'react';

export default function Home() {
  const [currentLandmark, setCurrentLandmark] = useState({
      "name": "Memorial Belltower",
      "type": "Landmark",
      "lat": 35.7861412,
      "lon": -78.66350316,
      "photo_url": "https://live.staticflickr.com/8383/29084921961_ea9cd39fa2_z.jpg",
      "photo_source": "ncsuweb Flickr"
  });

  return (
    <>
		<div>
			<h1>NCSU Places</h1>
        </div>
    </>
  )
}
