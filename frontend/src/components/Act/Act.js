import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';

export default function Act(props) {
    const daily_acts = 
        Array.isArray(props.data.daily_acts) ? props.data.daily_acts : [];

    const daily = (daily_acts).map(
        (detail) => {
            console.log(detail);
            return (
                <tr>
                    { detail.act.type === 'Gaming' ? <td><Icon.Controller /></td> : <td><Icon.CodeSlash /></td> }
                    <td>{ detail.act.duration }</td>
                    <td>{ detail.game.title }</td>
                </tr>
            )
        }
    );

    const day_sum = 
        Array.isArray(props.data.day_sum) ? props.data.day_sum : [];

    return (
        <main className="col-10 mx-auto">
            <div className="col-12 p-3 mx-auto border rounded-3">
                <Table hover variant="dark">
                    <thead>
                        <tr>
                            <th><Icon.Activity /></th>
                            <th><Icon.Clock /></th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colspan="3">📆Daily</th>
                        </tr>

                        { daily }

                        <tr>
                            <td>🎮</td>
                            <td>{ day_sum.game_dur }</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </main>
    );
}