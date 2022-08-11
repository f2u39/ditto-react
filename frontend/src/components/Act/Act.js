import Table from 'react-bootstrap/Table';
import * as Icon from 'react-bootstrap-icons';

export default function Act(props) {
    const daily = (props.data).map(
        (act) => {
            return (
                <tr>
                    { act.Act.type === 'Gaming' ? <td><Icon.Controller /></td> : <td><Icon.CodeSlash /></td> }
                    <td>{ act.Act.duration }</td>
                </tr>
            )
        }
    )

    return (
        <main className="col-10 mx-auto">
            <div className="col-12 p-3 mx-auto border rounded-3">
                <Table hover variant="dark">
                    <thead>
                        <tr>
                            <th><Icon.Activity /></th>
                            <th><Icon.Clock /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colspan="5">📆Daily</th>
                        </tr>

                        { daily }
                    </tbody>
                </Table>
            </div>
        </main>
    );
}