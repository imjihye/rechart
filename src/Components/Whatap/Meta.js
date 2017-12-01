export const INTERVAL = 5 * 1000;

export var api = {
    url:'http://apmote.whatap.io:8080',
    timeout:10000,
    withCredentials:true,
    pcode:'1234569339'
}

export var chart = {
    style:{
        width:'400px',
        height:'200px',
        padding:'20px',
    }
}

export var meta = {
    realtime: true,
    hitmap: {
        title: 'HIT_MAP',
    },
    tps: {
        title: 'TPS',
    },
    rt_user: {
        title: 'REALTIME_USER',
    },
    res_time: {
        title: 'RESPONSE_TIME',
    }
}

export var cookie = {
    wa: 'PVBVTb453Z32u3VnTR5kEtXA5bmgslue0vTckLQl3xxdQ4xr1OqyfhbBpfVr48ef',
    email: 'whatapiodemo@gmail.com ',
    domai: '.whatap.io',
}