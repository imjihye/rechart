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
    index:0,
    loop:0,
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
        let {type, data}=this.state;
        let title = meta[type].title;

        return(
            <div style={{'padding': '20px'}}>
                <h3>{title}</h3>
                 <HitmapChartStatic type={type} data={data} />
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
                oid: 'sum'
            }
        })
        .then((res) => {
            this.setState({
                data: res.data,
                index: res.data.index,
                loop: res.data.loop,
            });
            
            if(!realtime) return;

            setInterval(()=>{
                instance.get('/yard/api', {
                    params:{
                        type:type,
                        pcode: PCODE,
                        path: '/latest/loop',
                        oid: 'sum',
                        params:{
                            index:_this.state.index,
                            loop: _this.state.loop,
                        }
                    }
                })
                .then((res)=>{
                    let data={};
                    let value = res.data.hit;

                    data.hit = this.state.data.hit.concat(res.data.hit);
                    data.err = this.state.data.err.concat(res.data.err);

                    let i =0;
                    while(this.state.data.hit.length && i < (data.hit.length - this.state.data.hit.length)){
                        data.hit.shift();
                        data.err.shift();
                        i++;
                    }
                    
                    this.setState({
                        data: data,
                        index: res.data.index,
                        loop: res.data.loop,
                    });
                })
            }, 5 * 1000);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

