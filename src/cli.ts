#!/usr/bin/env node
import { readFileSync } from "fs";
import { cssToXaml } from "./index.js";

// Basic argument parsing
const [, , input, flag, target] = process.argv;

if (!input || !flag || flag !== "--to" || !target) {
  console.log("Usage: strafe <property> --to <css|xaml|swiftui|qml>");
  process.exit(1);
}

const css = readFileSync(input, "utf8");
const output = cssToXaml(css); // in the future, switch by target

console.log(output);
