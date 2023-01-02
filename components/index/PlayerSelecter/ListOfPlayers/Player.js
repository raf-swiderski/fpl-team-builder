import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addOnePlayer } from '../../../../redux/features/teamGridSlice'

export default function Player(props) {

    const dispatch = useDispatch()
    const player = props.player
    const playerPhotoId = player.photo.slice(0, -4); 
    const picUrl = `https://resources.premierleague.com/premierleague/photos/players/110x140/p${playerPhotoId}.png`

    const handleClick = () => { dispatch(addOnePlayer(player)) }

    return (
        <ListItemButton key={props.index}
            sx={{backgroundColor: "secondary.main"}}
            onClick={handleClick}>
            <ListItem sx={{ maxWidth: 287, maxHeight: 40}}>
                <ListItemAvatar>
                    <Avatar style={{height: 50}} src={picUrl} alt={player.web_name} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {player.web_name}
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
                            £{insertDecimalPoint(player.now_cost)}m Points: {player.total_points}
                        </Typography>

                        {` ${player.team_name}`}
                    </React.Fragment>
                    }
                />
            </ListItem>
        </ListItemButton>
    );
}

function insertDecimalPoint(num) {
    const numString = String(num);
    const firstPart = numString.slice(0, -1);
    const lastPart = numString.slice(-1);

    return `${firstPart}.${lastPart}`;
}
