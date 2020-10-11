extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use web_sys::*;

#[wasm_bindgen]
pub fn greet_from_console(name: String) {
    console::log_1(&JsValue::from(greet(name)));
}

#[wasm_bindgen]
pub fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub fn loop_n_times(n: usize) -> usize {
    let mut s: String = String::from("");
    for _ in 0..n {
        s += "0";
    }
    return s.len();
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        assert_eq!(greet(String::from("world")), String::from("Hello, world!"));
    }
}
