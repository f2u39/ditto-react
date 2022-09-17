import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { Tablet, PcDisplay, NintendoSwitch, Playstation, Xbox } from 'react-bootstrap-icons';
import { Code, CodeSlash } from 'react-bootstrap-icons';
import { Battery, BatteryCharging, BatteryFull, BatteryHalf } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

interface Detail {
    game: Game,
    developer: Developer,
    publisher: Publisher,
    play_hour: 0,
    play_min: 0,
}

interface Game {
    id: string,
    title: string,
    genre: string,
    platform: string,
    developer_id: string,
    publisher_id: string,
    status: string,
    playtime: string,
    rating: string,
}

interface Developer {
    id: string,
    name: string,
}

interface Publisher {
    id: string,
    name: string,
}

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
    const [details, setDetails] = useState<Detail[]>([]);
    const [curPage, setCurPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [expanded, setExpanded] = useState(false);
    const [expandedId, setExpandedId] = useState(-1)

    useEffect(() => {
        fetchDetails();
    }, []);

    const handleExpandClick = (i: number) => {
        setExpandedId(expandedId === i ? -1 : i);
    }

    return (
        <Grid
            container
            spacing={2}
            // direction="column"
            justifyContent="center"
            // alignItems="center"
            xs={12}
        >
            {details.map((element, i) => (
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 300 }} key={element.game.id}>
                        <CardMedia
                            component="img"
                            height="300"
                            image="static/images/colors/lavender.png"
                            // /assets/img/games/xxx.webp
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <h4>{element.game.title}</h4>
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
                                onClick={() => handleExpandClick(i)}
                                aria-expanded={expandedId === i}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Box sx={{
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
                                                    {/* { element.game.platform } */}
                                                    <Tablet />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    { element.game.rating }
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        sx={{ pt: 1 }}
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
                                                <InputAdornment position="end">
                                                    { element.developer.name }
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        sx={{ pt: 1 }}
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
                                                <InputAdornment position="end">
                                                    { element.publisher.name }
                                                </InputAdornment>
                                            )
                                        }}
                                    />

                                    <TextField
                                        disabled
                                        sx={{ pt: 1 }}
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
                                                <InputAdornment position="end">
                                                    { element.play_hour }h
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Box>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}

            <Stack spacing={2}>
                <Pagination
                    count={totalPages} 
                    defaultPage={curPage}
                    onChange={(e, value) => changePage(value)}
                    variant="outlined"
                    color="secondary" />
            </Stack>
        </Grid>
    );

    async function fetchDetails() {
        try {
            let resp = await fetch('/api/game/status/Played/'+curPage);
            let json = await resp.json();
            setDetails(json["details"]);
            setTotalPages(json["total_pages"])
        } catch (error) {
            console.log(error);
        }
    }

    async function changePage(page: number) {
        setCurPage(page);
        fetchDetails();
    }
}