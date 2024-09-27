import type { Candidate } from "../interfaces/Candidate.interface"
import { IoRemove  } from "react-icons/io5";

const styles = { 

    iconRemove : {
        background:'#FF0000',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        color:'#000000',
        cursor:'pointer'
    },

};


type PotentialCandidatesProps = {
    potentialCandidates : Candidate[]
}

const SavedCandidatesCard = ({potentialCandidates} : PotentialCandidatesProps ) => {

    return (
        <>
            <h2>Potential Candidates</h2>
            <table>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Email</td>
                    <td>Company</td>
                    <td>Bio</td>
                    <td>Reject</td>                    
                </tr>
                <tbody>
                    {potentialCandidates.map((candidate)=>(
                        
                        <tr>
                            {candidate?. avatar_url ? (
                                <td><img 
                                src={`${candidate.avatar_url}`} 
                                alt={`${candidate.login}`} 
                                style={{width:30, height:30 }} 
                                /></td>
                            ) : (
                                <img src={"https://placehold.co/600x400"} style={{width:30, height:30}}  />
                            )}
                            {candidate?. name ? (
                                <td>{candidate.name}</td>
                            ) : (
                                <td>--</td>
                            )}
                            {candidate?. location ? (
                                <td>{candidate.location}</td>
                            ) : (
                                <td>--</td>
                            )}
                            {candidate?. email ? (
                                <td>{candidate.email}</td>
                            ) : (
                                <td>--</td>
                            )}
                            {candidate?. company ? (
                                <td>{candidate.company}</td>
                            ) : (
                                <td>--</td>
                            )}
                            <td>Add code for Bio</td>
                            <td>
                            <IoRemove style={styles.iconRemove}  />
                            </td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SavedCandidatesCard;