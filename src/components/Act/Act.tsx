import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { daily }
                </TableBody>
            </Table>
        </TableContainer>
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

