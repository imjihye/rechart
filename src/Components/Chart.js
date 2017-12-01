
import React, {Component, PropTypes} from 'react';
import { instanceOf } from 'prop-types';

import {LineChart, Line} from 'recharts';
import Cookies from 'universal-cookie';
import axios from 'axios';
var instance = axios.create({
    baseURL: 'http://apmote.whatap.io:8080',
    timeout: 10000,
    withCredentials: true,
  });

const cookies = new Cookies();
const DOMAIN = '.whatap.io';
const PCODE = '1234569339';

// whatapiodemo@gmail.com 
const WA = 'PVBVTb453Z32u3VnTR5kEtXA5bmgslue0vTckLQl3xxdQ4xr1OqyfhbBpfVr48ef';

const initialState ={
    data:[]
}

export default class Chart extends React.Component{
    // prop type & defalt value
    static propTypes = {
        mapData: PropTypes.func
    }

    static defaultProps = {
    }

    constructor(props){
        super(props);
        this.state=initialState;
        
        cookies.set('wa', WA, { domain: DOMAIN });


    }

    render(){
        let {data} = this.state;

        return(
            <div>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
                zzzz
            </div>
        )
    }
    mapData(value){
        let data = [];

        value.map((d)=>{
            data.push(
                {name: d[0], value: d[1]}
            );
        });

        this.setState({
            data: data
        });
    }
    componentDidMount(){
        let _this = this;

        // Optionally the request above could also be done as
        instance.get('/yard/api', {
            params: {
                type: 'tps',
                pcode: PCODE,
                path: '/latest/series'
            }
        })
        .then((res) => {
            _this.mapData(res.data);

            setTimeout(()=>{
                instance.get('/yard/api', {
                    params:{
                        type:'tps',
                        pcode: PCODE,
                        path: '/latest/last'
                    }
                })
                .then((res)=>{
                    
                    _this.mapData(res.data);
                })



                // t.highcharts(options);
                // self.chart = t.highcharts();
                // self.drawSeries();
                // if( isCustomLegend === true ) self.setLegendDiv(t);
                
                // if(cb) {
                //     return cb();
                // }
            },5*1000)

        })
        .catch(error => {
            console.log(error);
        });



        
    }

}

