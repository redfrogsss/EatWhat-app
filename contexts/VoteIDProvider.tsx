
import { createContext, useState } from 'react';

//create a context
export const voteIDContext = createContext("");

const VoteIDProvider = (props) => {
    // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState("");

    return (
        // this is the provider providing state
        <voteIDContext.Provider value={{userDetails, setUserDetails}}>
            {props.children}
        </voteIDContext.Provider>
    );
};

export default VoteIDProvider;