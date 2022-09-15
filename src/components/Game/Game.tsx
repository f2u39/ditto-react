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
import { Box, Button, ButtonGroup, Divider, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

import { Tablet, PcDisplay, NintendoSwitch, Playstation, Xbox } from 'react-bootstrap-icons';
import { Code, CodeSlash } from 'react-bootstrap-icons';
import { Battery, BatteryCharging, BatteryFull, BatteryHalf } from 'react-bootstrap-icons';

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

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

export default function Game() {
    const [expanded, setExpanded] = React.useState(false);

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={8}>
                <Box sx={{ flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="static/images/colors/purple.png"
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
                                        mx: "auto",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& > *': {
                                            m: 1,
                                        },
                                    }}
                                >
                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Tablet />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    S
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Code />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    CD Projekt Red
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CodeSlash />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    CD Projekt
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BatteryCharging />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    5 hours
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Box>


                            </CardContent>
                        </Collapse>
                    </Card>

                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="static/images/colors/purple.png"
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
                                        mx: "auto",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& > *': {
                                            m: 1,
                                        },
                                    }}
                                >
                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Tablet />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    S
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Code />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    CD Projekt Red
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CodeSlash />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    CD Projekt
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        inputProps={{
                                            style: { padding: '7px 5px', textAlign: 'right' },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BatteryCharging />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="start">
                                                    5 hours
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Box>


                            </CardContent>
                        </Collapse>
                    </Card>
                </Box>
            </Grid>
        </Grid>

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