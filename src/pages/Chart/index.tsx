import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Page A', uv: 300, pv: 2100, amt: 2000},
{name: 'Page B', uv: 200, pv: 2200, amt: 2100},
{name: 'Page C', uv: 500, pv: 2300, amt: 2500} ]


export default function Chart(){
    return (
        <LineChart width={900} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}