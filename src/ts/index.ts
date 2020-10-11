window.onload = main;

async function startButtonOnClick() {
    const NInput = document.getElementById("N") as HTMLInputElement;
    const outputDiv = document.getElementById("output") as HTMLElement;
    const N = Number.parseInt(NInput.value);

    const RustLib = await import("../../rust-lib/pkg/index");

    // ts
    performance.mark("ts-start");
    loop_n_times(N);
    performance.mark("ts-end");
    performance.measure("ts", "ts-start", "ts-end");

    // rust
    performance.mark("rust-start");
    RustLib.loop_n_times(N);
    performance.mark("rust-end");
    performance.measure("rust", "rust-start", "rust-end");

    const measures = performance.getEntriesByType("measure");
    let output = "";
    measures.forEach(measure => {
        output += measure.name + ": " + measure.duration + "<br>";
    });
    outputDiv.innerHTML = output;

    performance.clearMarks();
    performance.clearMeasures();
}

async function main() {
    const RustLib = await import("../../rust-lib/pkg/index");
    RustLib.greet_from_console("world");
    (document.getElementById("startButton") as HTMLButtonElement).onclick = startButtonOnClick;
}

function loop_n_times(n: number): number {
    let s: string = "";
    for (let i = 0; i < n; i++) {
        s += "0";
    }
    return s.length;
}