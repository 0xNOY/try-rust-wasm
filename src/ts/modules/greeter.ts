export function greet(name: string) {
    const e = document.createElement("h1");
    e.innerText = "hello";
    document.body.appendChild(e);
    setTimeout(() => {
        e.innerText = name;
    }, 2000);
}