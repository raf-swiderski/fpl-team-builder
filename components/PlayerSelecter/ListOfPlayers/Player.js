import * as React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

export default function Player(props) {

    const player = props.player

    return (
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
    );
}

