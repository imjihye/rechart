import React, {Component, PropTypes} from 'react';
import memoent from 'moment';
import {cookie as auth} from './Meta';

import WLineChart from './WLineChart';
import WAreaChart from './WAreaChart';
import WHitMapChart from './WHitMapChart';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class WCharts extends Component{
    constructor(props){
        super(props);
        
        cookies.set('wa', auth.wa, {domain: auth.domain});
    }

    render(){
        // WLineChart & WAreaChart type: tps, rt_user, res_time
        return(
            <div>
                <WHitMapChart />
                
                <WAreaChart type='tps' />
                <WLineChart type='res_time' />
                <WLineChart type='rt_user' />

            </div>
        )
    }
}