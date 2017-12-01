import React, {Component, PropTypes} from 'react';
import moment from 'moment'
import {chart as meta, api} from './Meta'

// import HitmapChartDatabind from 'components/HitmapChart/ChartDatabind';
// var HitmapBind = new HitmapChartDatabind('hitmap');

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

export default class WHitMap extends Component{
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
        return(
            <div></div>
        )
    }
}

