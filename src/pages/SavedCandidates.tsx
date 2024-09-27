import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
import SavedCandidatesList from "../components/SavedCandidatesList";

const SavedCandidates = () => {

  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(()=>{
  
    //Check local storage for saved candidate
    const parsedCandidates = JSON.parse(
      localStorage.getItem('candidates') as string
    );
  
    setPotentialCandidates(parsedCandidates);
    //console.log(potentialCandidates);
  
  },[])


  return (
    <>
      {(!potentialCandidates?.length || potentialCandidates?.length === 0) ? (
          <h2>Potential candidates are not avaialble at this time!</h2>
      ) : (
          <SavedCandidatesList 
            potentialCandidates={potentialCandidates}
          />
      ) }
    </>
  );
};

export default SavedCandidates;
