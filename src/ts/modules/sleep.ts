export function sleep(msec: number) {
    return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
    })
}