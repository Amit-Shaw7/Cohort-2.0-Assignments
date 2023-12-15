const printTime = async () => {
    const date = new Date;
    let hour = await date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let format = hour >= 12 ? 'PM' : 'AM';

    hour = hour > 9 ? hour : `0${hour}`;
    hour = hour > 12 ? hour - 12 : hour;
    minutes = minutes > 9 ? minutes : `0${minutes}`;
    seconds = seconds > 9 ? seconds : `0${seconds}`;

    console.log(`${hour}:${minutes}:${seconds} ${format}`);
}

const startClock = () => {
    setInterval(() => {
        printTime();
    }, 1000);
}

startClock();
