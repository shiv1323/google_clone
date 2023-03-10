import React, { useState } from 'react'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import '../../component_css/Search.css'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


function Search({ hideButtons = false }) {

    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory()
    const search = (e) => {
        e.preventDefault();

        // debugging
        // console.log('Click google search button>>>', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('/search')
    };

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button
                        className="search_buttonsHidden"
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button
                        className="search_buttonsHidden"
                        variant="outlined"
                    >I'm Feeling Lucky</Button>
                </div>
            )}

        </form>
    )
}

export default Search
// 8:11