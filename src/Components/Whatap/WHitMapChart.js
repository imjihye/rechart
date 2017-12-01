import React, {Component, PropTypes} from 'react';
import moment from 'moment'
import {chart as meta, api} from './Meta'

import HitmapChartStatic from './Sub/HitmapChartStatic';

import axios from 'axios';

var instance = axios.create({
    baseURL: api.url,
    timeout: api.timeout,
    withCredentials: api.withCredentials,
});

const PCODE = api.pcode;

const initialState ={
    type:'hitmap',
    data:{},
    value:[],
    realtime: meta.realtime
}

export default class WHitMapChart extends Component{
    // prop type & defalt value
    static propTypes = {
    }

    static defaultProps = {
    }

    constructor(props){
        super(props);
        this.state=initialState;
    }

    render(){
        let {data}=this.state;
        
        return(
            <div> 
                 <HitmapChartStatic id="hitmap" data={data} />
            </div>
        )
    }

    componentDidMount(){ 
        let {type, realtime} = this.state;
        let _this = this;

        // Optionally the request above could also be done as
        instance.get('/yard/api', {
            params: {
                type: type,
                pcode: PCODE,
                path: '/latest/loop',
                oid: 'sum',
                // params: {
                //     "index":69110,
                //     "loop":1,
                // }
            }
        })
        .then((res) => {
            this.setState({
                data: res.data,
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
}

