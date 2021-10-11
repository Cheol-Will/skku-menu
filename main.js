#!/usr/bin/env node
const https = require("https");
const parser = require("node-html-parser");

let url = "https://www.skku.edu/skku/campus/support/welfare_11_1.do?mode=info&conspaceCd=20201097&srResId=10&srShowTime=D&srCategory=L";
let User_Agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36";
console.log("before https");
https.get(
    url,
    {
        headers: {
            "User-Agent":User_Agent,
        },
    },
    (res) => {
        let data = "";

        res.on("data", (d) => {
            data += d;
        });
        res.on("end", () => {
            let root = parser.parse(data);
            console.log('in end');
            root.querySelectorAll(".menu_title").forEach((menu) => {
                console.log(menu.innerText.trim());
            });
        });
    }
);

console.log(1111111111);