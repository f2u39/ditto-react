
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Box, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';

import PostAddIcon from '@mui/icons-material/PostAdd';
import TimerIcon from '@mui/icons-material/Timer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TocIcon from '@mui/icons-material/Toc';

import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Act() {
    const [acts, setActs] = useState({
        daily_acts: [],
        day_sum: "",
        monthly_acts: [],
        month_sum: ""
    });

    useEffect(() => {
        fetchActs();
    }, []);

    const dailyActs = Array.isArray(acts.daily_acts) ? acts.daily_acts : [];
    // console.log(daily_acts);

    const daily = (dailyActs).map(
        (detail: any) => {
            return (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {
                        detail.act.type === 'Gaming' ?
                            <TableCell component="th" scope="row"><SportsEsportsIcon /></TableCell> :
                            <TableCell component="th" scope="row"><GitHubIcon /></TableCell>
                    }
                    <TableCell align="right">{detail.act.duration}</TableCell>
                    {
                        detail.game.length === 1 ?
                            <TableCell align="right">{detail.game[0].title}</TableCell> :
                            <TableCell align="right"></TableCell>
                    }
                </TableRow>
            )
        }
    );

    // const daySum = acts.day_sum != null ? acts.day_sum : [];
    // const monthlyActs = Array.isArray(acts.monthly_acts) ? acts.monthly_acts : [];
    // const monthly = (monthlyActs).map(
    //     (detail: any) => {
    //         return (
    //             <tr>
    //                 {
    //                     detail.act.type === 'Gaming' ?
    //                         <td><SportsEsportsIcon /></td> :
    //                         <td><GitHubIcon /></td>
    //                 }
    //                 <td>{detail.act.duration}</td>
    //                 {
    //                     detail.game.length === 1 ?
    //                         <td>{detail.game[0].title}</td> :
    //                         <td></td>
    //                 }
    //             </tr>
    //         )
    //     }
    // );
    // const monthSum = acts.month_sum != null ? acts.month_sum : [];

    return (
        <Grid container
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={8}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }} />

                            <Link href="/game">
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <PostAddIcon sx={{ fontSize: 30, color: "lavender" }} />
                                </IconButton>
                            </Link>

                            <Link href="/word">
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <TimerIcon sx={{ fontSize: 30, color: "lavender" }} />
                                </IconButton>
                            </Link>

                            <Link href="/act">
                                <IconButton
                                    size="large"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <CalendarMonthIcon sx={{ fontSize: 30, color: "lavender" }} />
                                </IconButton>
                            </Link>

                            <Typography sx={{ flexGrow: 1 }} />
                        </Toolbar>
                    </AppBar>
                </Box>
                <TableContainer>
                    <Table sx={{ maxWidth: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell align="right">2</TableCell>
                                <TableCell align="right">3</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {daily}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

    async function fetchActs() {
        try {
            let resp = await fetch('/api/act');
            let json = await resp.json();
            console.log(json);
            setActs(json);
        } catch (error) {
            console.log(error);
        }
    }
}

