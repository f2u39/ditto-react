import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TuneIcon from '@mui/icons-material/Tune';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Button, ButtonGroup, TextField } from '@mui/material';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Game() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="300"
                image="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <h4>Cyberpunk 2077</h4>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <TuneIcon />
                </IconButton>

                <IconButton>
                    <PlayCircleOutlineIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        {/* <ButtonGroup size="small" aria-label="small button group">
        <Button key="one">One</Button>
      <TextField size="small" />
      </ButtonGroup> */}

                        <ButtonGroup size="small">
                            <Left
                                disabled
                            />

                            <Right
                            />
                        </ButtonGroup>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}

const Left = styled(TextField)(() => ({

    '& fieldset': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
}));

const Right = styled(TextField)(() => ({

    '& fieldset': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}));