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
        dailyActs: [],
        daySum: "",
        monthlyActs: [],
        monthSum: ""
    });

    useEffect(() => {
        fetchActs();
    }, []);

    const daily_acts = Array.isArray(acts.dailyActs) ? acts.dailyActs : [];
    const daily = (daily_acts).map(
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

    const daySum = acts.daySum != null ? acts.daySum : [];
    const monthly_acts = Array.isArray(acts.monthlyActs) ? acts.monthlyActs : [];
    const monthly = (monthly_acts).map(
        (detail: any) => {
            return (
                <tr>
                    {
                        detail.act.type === 'Gaming' ?
                            <td><SportsEsportsIcon /></td> :
                            <td><GitHubIcon /></td>
                    }
                    <td>{detail.act.duration}</td>
                    {
                        detail.game.length === 1 ?
                            <td>{detail.game[0].title}</td> :
                            <td></td>
                    }
                </tr>
            )
        }
    );
    const monthSum = acts.monthSum != null ? acts.monthSum : [];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {/* {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    )

    async function fetchActs() {
        try {
            let resp = await fetch('/api/act');
            let json = await resp.json();
            // console.log(json);
            setActs(json);
        } catch (error) {
            console.log(error);
        }
    }
}

