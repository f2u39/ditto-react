import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

import * as Icon from 'react-bootstrap-icons';

export default function Act(props) {
    const daily_acts = Array.isArray(props.data.daily_acts) ? props.data.daily_acts : [];
    const daily = (daily_acts).map(
        (detail) => {
            return (
                <tr>
                    { detail.act.type === 'Gaming' ? <td><Icon.Controller /></td> : <td><Icon.CodeSlash /></td> }
                    <td>{ detail.act.duration }</td>
                    { detail.game.length === 1 ? <td>{ detail.game[0].title }</td> : <td></td> }
                </tr>
            )
        }
    );
    
    const daySum = props.data.day_sum;

    const monthly_acts = Array.isArray(props.data.monthly_acts) ? props.data.monthly_acts : [];
    const monthly = (monthly_acts).map(
        (detail) => {
            return (
                <tr>
                    { detail.act.type === 'Gaming' ? <td><Icon.Controller /></td> : <td><Icon.CodeSlash /></td> }
                    <td>{ detail.act.duration }</td>
                    { detail.game.length === 1 ? <td>{ detail.game[0].title }</td> : <td></td> }
                </tr>
            )
        }
    );
    const monthSum = props.data.month_sum;

    return (
        <main className="col-10 mx-auto">
            <Navbar className="nav-bar" variant="dark" sticky="top">
                <Nav className="mx-auto">
                    <Nav.Link className="nav-link" href="/api/act/create"><Icon.JournalPlus className="nav-icon text-light" /></Nav.Link>
                    <Nav.Link className="nav-link" href="#" onClick=""><Icon.Stopwatch className="nav-icon text-light" /></Nav.Link>
                    <Nav.Link className="nav-link" href="/api/act/create"><Icon.Calendar3 className="nav-icon text-light" /></Nav.Link>
                </Nav>
            </Navbar>

            <div className="col-12 p-3 mx-auto border rounded-3">
                <Table hover variant="dark">
                    <thead>
                        <tr>
                            <th><Icon.Activity /></th>
                            <th><Icon.Clock /></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colspan="3">📆Daily</th>
                        </tr>

                        { daily }
                        
                        {/* <tr>
                            <td></td>
                            <td>🎮</td>
                            <td>{ daySum.game_hour }h { daySum.game_min }m</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>💻</td>
                            <td>{ daySum.pgm_hour }h { daySum.pgm_min }m</td>
                        </tr> */}
                    </tbody>

                    <tfoot>
                        <tr>
                            <th colspan="3">📅Monthly</th>
                        </tr>
                        { monthly }
                        {/* <tr>
                            <td></td>
                            <td>🎮</td>
                            <td>{ monthSum.game_hour }h { monthSum.game_min }m</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>💻</td>
                            <td>{ monthSum.pgm_hour }h { monthSum.pgm_min }m</td>
                        </tr> */}
                    </tfoot>
                </Table>
            </div>
        </main>
    );
}