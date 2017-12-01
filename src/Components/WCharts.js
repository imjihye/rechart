import React, {Component, PropTypes} from 'react';
import memoent from 'moment';

import WLineChart from './WLineChart';
import WAreaChart from './WAreaChart';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const DOMAIN = '.whatap.io';

// whatapiodemo@gmail.com 
const WA = 'PVBVTb453Z32u3VnTR5kEtXA5bmgslue0vTckLQl3xxdQ4xr1OqyfhbBpfVr48ef';


export default class WCharts extends Component{
    constructor(props){
        super(props);

        cookies.set('wa', WA, {domain: DOMAIN});
    }

    render(){
        // WLineChart & WAreaChart type: tps, rt_user, res_time
        return(
            <div>
                <WAreaChart type='tps' />
                <WLineChart type='res_time' />
                <WLineChart type='rt_user' />
            </div>
        )
    }
}