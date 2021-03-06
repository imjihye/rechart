import React, {Component, PropTypes} from 'react';
import moment from 'moment'
import {chart, meta, api, INTERVAL} from './Meta'

import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line} from 'recharts';
import axios from 'axios';
var instance = axios.create({
    baseURL: api.url,
    timeout: api.timeout,
    withCredentials: api.withCredentials,
});

const PCODE = api.pcode;

const initialState ={
    type:'',
    data:[],
    value:[],
    realtime: meta.realtime
}

export default class WLineChart extends Component{
    // prop type & defalt value
    static propTypes = {
        type: PropTypes.string,
        mapData: PropTypes.func,
    }

    static defaultProps = {
    }

    constructor(props){
        super(props);
        this.state=initialState;
    }

    render(){
        let {type, data} = this.state;
        let title = meta[type].title;

        return(
            <div style={{padding: chart.style.padding}}>
                <h3>{title}</h3>
                <LineChart syncId="anyId" width={400} height={200} data={data}>
                <XAxis dataKey="name" tick={true} domain={['dataMin', 'dataMax']}/>
                <CartesianGrid />
                <YAxis type="number" domain={[0, 'auto']} />
                <Tooltip />
                <Line type="basis" dataKey="value" stroke="#8884d8" dot={false} isAnimationActive={false} />
                </LineChart>
            </div>
        )
    }
    mapData(type, value){
        let data = [];
        if(type === 'res_time' && value instanceof Object){
            value = value.avg;
        }
        value = this.state.value.concat(value);

        value.map((d, i)=>{
            data.push(
                {name: moment(d[0]).format('HH:mm'), value: d[1]}
            );
        });

        let i = value.length - this.state.value.length;
        do{
            data.shift();
            i--;
        } while(this.state.value.length && i>0);

        this.setState({
            data: data,
            value: value
        });
    }
    componentWillReceiveProps(nextProps){
        var {type} = this.props;
        this.setState({
            type: type
        });
    }
    componentWillMount(){
        var {type} = this.props;

        this.setState({
            type: type
        });
    }
    componentDidMount(){
        let {type, realtime} = this.state;
        let _this = this;

        // Optionally the request above could also be done as
        instance.get('/yard/api', {
            params: {
                type: type,
                pcode: PCODE,
                path: '/latest/series'
            }
        })
        .then((res) => {
            _this.mapData(type, res.data);

            if(!realtime) return;

            setInterval(()=>{
                instance.get('/yard/api', {
                    params:{
                        type:type,
                        pcode: PCODE,
                        path: '/latest/last'
                    }
                })
                .then((res)=>{
                    _this.mapData(type, res.data);
                })
            },INTERVAL);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

