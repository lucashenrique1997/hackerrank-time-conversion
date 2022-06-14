timeConversion('07:05:45PM')
timeConversion('12:01:00PM')
timeConversion('12:01:00AM')
timeConversion('09:15:00AM')

function timeConversion(s) {
    const time = s.slice(0,8);
    const format = s.slice(8,10);
    let isException = false;

    const splitedTime = time.split(':');

    if(splitedTime[0] === '12' && format === 'AM') {
        splitedTime[0] = '00';
        isException = true
    }

    if(splitedTime[0] === '12' && format === 'PM') {
        splitedTime[0] = '12';
        isException = true
    }

    const hour = format === 'PM' && isException === false ? Number(splitedTime[0]) + 12 : splitedTime[0]

    console.log(`${hour}:${splitedTime[1]}:${splitedTime[2]}`)
}