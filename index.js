const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

const superbowlWin = record => {
    const winYear = record.find(game => game.result === "W");
    return winYear ? winYear.year : undefined;
};

const win = superbowlWin(record);

console.log(win);

