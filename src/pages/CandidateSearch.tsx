import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  const [ currentCandidate, setCurrentCandidate] = useState<Candidate>({ id:null, name:null, login:null, location:null, avatar_url:null, email: null, html_url:null, company:null } );
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  const [ result, setResult ] = useState<Candidate[]>([]);

  useEffect( () => {

      renderCandidate();
    
  },[]);

  const renderCandidate =  async() => {

    const data:Candidate[] = await searchGithub();
    setResult(data);
    await getUser(data[currentIndex].login || '');
  }

  const getUser = async(userName:string) => {

    const data = await searchGithubUser(userName);
    setCurrentCandidate(data);

  }

  const addToCandidateList = async(isSelected:boolean) => {

    if(isSelected) {
        //save candidate to localstorage
        let parsedCandidates:Candidate[] = [];
        const savedCandidates = localStorage.getItem('candidates');
        if( typeof savedCandidates === 'string'  ) {

          parsedCandidates = JSON.parse(savedCandidates);

        }

        parsedCandidates = [...parsedCandidates, currentCandidate ];
        localStorage.setItem('candidates', JSON.stringify(parsedCandidates));

    }

    if( currentIndex+1 < result.length ) {
      setCurrentIndex(currentIndex+1);
      await getUser(result[currentIndex+1].login || '' );
    } else {
      setCurrentIndex(0);
      await renderCandidate();
    }

  }

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard 
        currentCandidate = {currentCandidate}
        addToCandidateList = {addToCandidateList}
      />
    </>
  )
};

export default CandidateSearch;
