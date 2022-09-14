
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AppBar, Box, Divider, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';

import PostAddIcon from '@mui/icons-material/PostAdd';
import TimerIcon from '@mui/icons-material/Timer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReorderIcon from '@mui/icons-material/Reorder';

import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Act() {
    const [acts, setActs] = useState({
        daily_acts: [],
        day_sum: null,
        monthly_acts: [],
        month_sum: []
    });

    useEffect(() => {
        fetchActs();
    }, []);

    const dailyActs = Array.isArray(acts.daily_acts) ? acts.daily_acts : [];
    const DailyTableRows = (dailyActs).map(
        (detail: any) => {
            return (
                <TableRow key={detail.id} sx={{ '&:last-child td, &:last-child th': { border: 0, fontSize: 15 } }}>
                    {
                        detail.act.type === 'Gaming' ?
                            <TableCell align="center"><SportsEsportsIcon /></TableCell> :
                            <TableCell align="center"><GitHubIcon /></TableCell>
                    }
                    <TableCell align="center">{detail.act.duration}</TableCell>
                    {
                        detail.game.length === 1 ?
                            <TableCell align="left">{detail.game[0].title}</TableCell> :
                            <TableCell></TableCell>
                    }
                </TableRow>
            )
        }
    );

    const daySum: any = acts.day_sum != null ? acts.day_sum : [];
    const DaySumTableRows =
        <>
            <TableRow>
                <TableCell align="right" colSpan={2}>🎮</TableCell>
                {daySum.length === 0 ?
                    <TableCell></TableCell> :
                    <TableCell align="left">{daySum.game_hour}h {daySum.game_min}m</TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell align="right" colSpan={2}>💻</TableCell>
                {daySum.length === 0 ?
                    <TableCell></TableCell> :
                    <TableCell align="left">{daySum.pgm_hour}h {daySum.pgm_min}m</TableCell>
                }
            </TableRow>
        </>;

    const monthlyActs = Array.isArray(acts.monthly_acts) ? acts.monthly_acts : [];
    const MonthlyTableRows = (monthlyActs).map(
        (detail: any) => {
            return (
                <TableRow key={detail.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {
                        detail.act.type === 'Gaming' ?
                            <TableCell align="left"><SportsEsportsIcon /></TableCell> :
                            <TableCell><GitHubIcon /></TableCell>
                    }
                    <TableCell align="center">{detail.act.duration}</TableCell>
                    {
                        detail.game.length === 1 ?
                            <TableCell align="left">{detail.game[0].title}</TableCell> :
                            <TableCell></TableCell>
                    }
                </TableRow>
            )
        }
    );
    const monthSum: any = acts.month_sum != null ? acts.month_sum : [];
    const MonthSumTableRows =
        <>
            <TableRow>
                <TableCell align="right" colSpan={2}>🎮</TableCell>
                {monthSum.length === 0 ?
                    <TableCell></TableCell> :
                    <TableCell align="left">{monthSum.game_hour}h {monthSum.game_min}m</TableCell>
                }
            </TableRow>
            <TableRow>
                <TableCell align="right" colSpan={2}>💻</TableCell>
                {monthSum.length === 0 ?
                    <TableCell></TableCell> :
                    <TableCell align="left">{monthSum.pgm_hour}h {monthSum.pgm_min}m</TableCell>
                }
            </TableRow>
        </>;

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
                    <Table sx={{ maxWidth: 500, borderRadis: '15px' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><FormatListBulletedIcon /></TableCell>
                                <TableCell align="center"><AccessTimeIcon /></TableCell>
                                <TableCell></TableCell>
                                {/* <TableCell align="right"><ReorderIcon /></TableCell> */}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={3}>📆 Daily</TableCell>
                            </TableRow>
                            {DailyTableRows}
                            {DaySumTableRows}

                            <Divider variant="middle" />

                            <TableRow>
                                <TableCell colSpan={3}>📅 Monthly</TableCell>
                            </TableRow>
                            {MonthlyTableRows}
                            {MonthSumTableRows}

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

