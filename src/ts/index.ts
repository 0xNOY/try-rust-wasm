window.onload = main;

async function main() {
    const RustLib = await import("../../rust-lib/pkg/index");
    RustLib.greet_from_console("world");
    (document.getElementById("startButton") as HTMLButtonElement).onclick = onClickStartButton;
}

async function onClickStartButton() {
    const NInput = document.getElementById("N") as HTMLInputElement;
    const outputDiv = document.getElementById("output") as HTMLElement;
    const N = Number.parseInt(NInput.value);

    const RustLib = await import("../../rust-lib/pkg/index");


    // ts
    performance.mark("ts-start");
    loopNTimes(N);
    performance.mark("ts-end");
    performance.measure("ts", "ts-start", "ts-end");

    // rust
    performance.mark("rust-start");
    RustLib.loop_n_times(N);
    performance.mark("rust-end");
    performance.measure("rust", "rust-start", "rust-end");


    const measures = performance.getEntriesByType("measure");
    let measureDurationLenList = [0];
    measures.forEach(measure => {
        measureDurationLenList.push(measure.duration.toString().length - Math.round(measure.duration).toString().length);
    });
    const maxMeasureDurationLen = Math.max(...measureDurationLenList);
    let output = "<table>";
    measures.forEach(measure => {
        console.log(measure.name, measure.duration);
        output += "<tr><td>"
            + measure.name
            + "</td><td align='right'>"
            + measure.duration.toString() + "0".repeat(maxMeasureDurationLen-(measure.duration.toString().length-Math.round(measure.duration).toString().length))
            + "</td></tr>";
    });
    output += "</table>"
    outputDiv.innerHTML = output;

    performance.clearMarks();
    performance.clearMeasures();
}

function loopNTimes(n: number): number {
    let s: string = "";
    for (let i = 0; i < n; i++) {
        s += "0";
    }
    return s.length;
}