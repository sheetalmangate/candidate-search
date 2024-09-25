import type { Candidate } from "../interfaces/Candidate.interface"
import { IoAdd, IoRemove  } from "react-icons/io5";

const styles = { 

    iconRemove : {
        background:'#FF0000',
        border:'1px solid black',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        cursor:'pointer',
        color:'black',
        align:'left'
    },
    iconAdd : {
        background:'#008000',
        border:'1px solid black',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        cursor:'pointer',
        color:'black',
        align:'right',
    },

};

type CandidateCardProps = {

    currentCandidate:Candidate;
    addToCandidateList:(isSelected:boolean) => void
}

const CandidateCard = ({currentCandidate, addToCandidateList } : CandidateCardProps ) => {
    console.log(currentCandidate);
    return (
        <>
           {currentCandidate?.login ? (
                <div>
                    {currentCandidate?.avatar_url ? (
                        <img style={{width:250, height:250}} src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />
                    ) : (
                        <img src={"https://placehold.co/600x400"}  />
                    )}
                    {currentCandidate?.location ? (
                        <p>Location: {currentCandidate.location}</p> 
                    ) : (''

                    )}
                    {currentCandidate?.email ? (
                        <p>Email: {currentCandidate.email}</p>
                    ) : ( ''

                    )}
                    {currentCandidate?.company ? (
                        <p>Comapny: {currentCandidate.company}</p>
                    ) : ('')}
                    <aside>
                        
                        <IoRemove onClick={() => addToCandidateList}  style={styles.iconRemove} />
                        <IoAdd onClick={() => addToCandidateList}  style={styles.iconAdd} />
                        
                    </aside>
                </div>
            
           ) : (
            <h2>No candidate found at this time.</h2>
           )}
        </>
    );
}

export default CandidateCard