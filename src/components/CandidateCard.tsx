import type { Candidate } from "../interfaces/Candidate.interface"
import { IoAdd, IoRemove  } from "react-icons/io5";

const styles = { 

    iconRemove : {
        background:'#FF0000',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        color:'#000000',
        cursor:'pointer'
    },
    iconAdd : {
        background:'#008000',
        border:'1px solid black',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        cursor:'pointer',
        color:'black',
    },

};

type CandidateCardProps = {

    currentCandidate:Candidate;
    addToCandidateList:(isSelected:boolean) => void
}

const CandidateCard = ({currentCandidate, addToCandidateList } : CandidateCardProps ) => {

    return (
        <section>
           {currentCandidate?.login ? (
                <>
                    {currentCandidate?.avatar_url ? (
                        <img 
                            src={`${currentCandidate.avatar_url}`} 
                            alt={`${currentCandidate.login}`} 
                            style={{width:250, height:250, borderRadius:'30px 30px 0 0'}} 
                        />
                    ) : (
                        <img src={"https://placehold.co/600x400"}  />
                    )}
                    {currentCandidate?.name ? (
                        <p>Name: {currentCandidate.name}</p> 
                    ) : (''

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
                   <p>
                        <IoRemove style={styles.iconRemove}  onClick={() => addToCandidateList(false)}   />
                        <IoAdd onClick={() => addToCandidateList(true)}  style={styles.iconAdd} />
                    </p>
                   
                </>     
           ) : (
            <h2>No candidate found at this time.</h2>
           )}
        </section>
    );
}

export default CandidateCard