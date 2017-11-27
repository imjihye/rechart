
import React, {Component, PropTypes} from 'react';
import {LineChart, Line} from 'recharts';



export default class Chart extends React.Component{
    // prop type & defalt value
    static propTypes = {
        id: PropTypes.string,
        data: PropTypes.array,
    }


    static defaultProps = {
        id: '',
        data: []
    }


    constructor(props){
        super(props);
    }

    render(){
        let { ... data} = this.props;
        data=[
            { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
            { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
            { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
            { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
            { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
        ];


        return(
            <div>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
                zzzz
            </div>
        )
    }

}

