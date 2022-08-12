import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { addOnePlayer, getTeamStore } from '../../../redux/features/teamGridSlice'

function checkIfPlayerIsInTeadGridStore(teamStore, player) {
    for (let i = 0; i < 14; i++) {
        let storedPlayer = teamStore[i]
        if (storedPlayer === player) {
            return true
        }
    }
    return false
}

export default function Player(props) {

    const player = props.player
    const dispatch = useDispatch()
    const teamStore = useSelector(getTeamStore)
    const [disabled, setDisabled] = React.useState(false)

    // if (player) is not in team store, re able the button

    // React.useEffect(() => {
    //     if (!checkIfPlayerIsInTeadGridStore(teamStore, player)) {
    //         setDisabled(false)
    //     }

    // }, [teamStore]);

    const handleClick = () => {
        dispatch(addOnePlayer(player))
        setDisabled(true)
    }

    return (
        <ListItemButton key={props.index} 
            sx={{backgroundColor: "secondary.main"}}
            onClick={handleClick}
            disabled={disabled}>
            <ListItem sx={{ maxWidth: 287, maxHeight: 40}}>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {player.first_name} {player.web_name}
                        </Typography>
                    </React.Fragment>
                    }
                    secondary={
                    <React.Fragment>
                        <Typography
                            
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            £{player.now_cost}m Points: {player.total_points}
                        </Typography>

                        {` ${player.team_name}`}
                    </React.Fragment>
                    }
                />
            </ListItem>
        </ListItemButton>
    );
}

