import pidusage from 'pidusage';

setInterval(logPid, 1000);

function logPid() {
    pidusage(process.pid, (err, stats) => {
        console.log(stats);
    });
}