import React, {useCallback} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


export default function OnClickNav() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('../Detail-Episode/detailEpisode.tsx', {replace: true}), [navigate]);

  return (
    <button type="button" onClick={handleOnClick}>
      Go to detail
    </button>
  );
}