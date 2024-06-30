import React from 'react';
import { useLocation } from 'react-router-dom';
import './GuideProfile.css';

const guidesData = [
  {
    id: 1,
    name: 'John Doe',
    bio: 'Experienced guide with 10+ years of experience.',
    image: 'https://example.com/johndoe.jpg',
    specialties: ['Hiking', 'Camping', 'Rock Climbing'],
    experience: '10+ years',
    rating: '4.5/5',
  },
  {
    id: 2,
    name: 'Jane Smith',
    bio: 'Certified guide with 5+ years of experience.',
    image: 'https://example.com/janesmith.jpg',
    specialties: ['Hiking', 'Bird Watching', 'Photography'],
    experience: '5+ years',
    rating: '4.2/5',
  },
  // Add more guides data here
];

const GuideProfile = () => {
  const location = useLocation();
  const guideId = parseInt(location.pathname.split('/')[2]); // Get the guide ID from the URL // Get the guide ID from the query string
  const guideData = guidesData.find((guide) => guide.id === guideId);

  if (!guideData) {
    return <div>Guide not found</div>;
  }

  return (
    <div>
      <h1>{guideData.name}</h1>
      <img src={guideData.image} alt={guideData.name} />
      <p>{guideData.bio}</p>
      <ul>
        <li>Specialties: {guideData.specialties.join(', ')}</li>
        <li>Experience: {guideData.experience}</li>
        <li>Rating: {guideData.rating}</li>
      </ul>
    </div>
  );
};

export default GuideProfile;