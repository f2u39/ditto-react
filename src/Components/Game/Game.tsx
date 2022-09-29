import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Badge, Box, Grid, InputAdornment, TextField } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { Tablet, PcDisplay, NintendoSwitch, Playstation, Xbox } from 'react-bootstrap-icons';
import { Code, CodeSlash } from 'react-bootstrap-icons';
import { Battery, BatteryCharging, BatteryFull } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

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
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [expanded, setExpanded] = useState(false);
    const [expandedId, setExpandedId] = useState(-1)
    const [status, setStatus] = useState("Playing")

    const [playedCount, setPlayedCount] = useState(0);
    const [playingCount, setPlayingCount] = useState(0);
    const [blockingCount, setBlockingCount] = useState(0);

    useEffect(() => {
        // fetchDetails();

        fetch(`/api/game/status/${status}/${page}`)
            .then(response => response.json())
            .then(data => {
                setDetails(data["details"])
                setTotalPages(data["total_pages"])
            })

        fetch(`/api/game/counts`)
            .then(resp => resp.json())
            .then(data => {
                setPlayedCount(data["playing_cnt"])
                setPlayingCount(data["played_cnt"])
                setBlockingCount(data["blocking_cnt"])
            })
    }, [page, status]);

    const handleExpandClick = (i: number) => {
        setExpandedId(expandedId === i ? -1 : i);
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setExpandedId(-1);
        setPage(value);
        // fetchDetails();
    };

    const CenterStack = styled(Stack)(() => ({
        textAlign: 'center',
    }));

    const handleStatusChange = (event: React.SyntheticEvent, newStatus: string) => {
        setPage(1);
        setStatus(newStatus);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={status}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList indicatorColor="secondary" onChange={handleStatusChange} centered>
                        <Tab
                            icon={
                                <Badge badgeContent={playedCount} color="primary">
                                    <BatteryFull fontSize="30" color="white" />
                                </Badge>
                            }
                            value="Played"
                        />

                        <Tab
                            icon={
                                <Badge badgeContent={playingCount} color="success">
                                    <BatteryCharging fontSize="30" color="green" />
                                </Badge>
                            }
                            value="Playing"
                        />

                        <Tab 
                            icon={
                                <Badge badgeContent={blockingCount} color="error">
                                    <Battery fontSize="30" color="red" />
                                </Badge>
                            }
                            value="Blocking" 
                        />
                    </TabList>
                </Box>


                <TabPanel value={status}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        sx={{ flexGrow: 1 }}
                        xs={12}
                    >
                        {details.map((element, i) => (
                            <Grid item>
                                <Card sx={{ maxWidth: 300 }} key={element.game.id}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={"static/images/games/" + element.game.id + ".webp"}
                                    // /assets/img/games/xxx.webp
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {element.game.title}
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
                                                                {element.game.platform === 'Mobile' ? <Tablet /> : <></>}
                                                                {element.game.platform === 'PC' ? <PcDisplay /> : <></>}
                                                                {element.game.platform === 'Playstation' ? <Playstation /> : <></>}
                                                                {element.game.platform === 'Nintendo Switch' ? <NintendoSwitch /> : <></>}
                                                                {element.game.platform === 'Xbox' ? <Xbox /> : <></>}
                                                            </InputAdornment>
                                                        ),
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                {element.game.rating}
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
                                                                {element.developer.name}
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
                                                                {element.publisher.name}
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
                                                                {element.play_hour}h
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Box>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        ))
                        }
                    </Grid>
                </TabPanel>

            </TabContext>
            <Grid xs={12} sx={{ pt: 3, pb: 3 }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        color="secondary" />
                </Box>
            </Grid>
        </Box>

    );

    async function fetchDetails() {
        try {
            let url = `/api/game/status/Played/${page}`
            let resp = await fetch(url);
            let json = await resp.json();
            setDetails(json["details"]);
            setTotalPages(json["total_pages"])
        } catch (error) {
            console.log(error);
        }
    }
}

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

interface Count {
    played_cnt: 0,
    playing_cnt: 0,
    blocking_cnt: 0,
}