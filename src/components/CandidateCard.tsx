import type { Candidate } from "../interfaces/Candidate.interface"


type CandidateCardProps = {

    currentCandidate:Candidate;
    addToCandidateList:(isSelected:boolean) => void
}

const CandidateCard = ({currentCandidate, addToCandidateList } : CandidateCardProps ) => {

    return (
        <div>
            {currentCandidate?.login ?(
                <>
                    {currentCandidate?.avatar_url ? (<img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />) : ( <img  src={"https://placehold.co/600x400"} />)
                }) : (<h2>No Candidate at this time </h2>)}
            </>            
        </div>
    )
}

export default CandidateCard