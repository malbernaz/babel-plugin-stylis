import { join } from "path";
import { readFileSync } from "fs";
import test from "ava";
import * as babel from "@babel/core";

import stylisPlugin from "../src";

const readFile = file => readFileSync(join(__dirname, "../__fixtures__", file), "utf-8").trim();
const transform = (file, options = {}) =>
  babel.transform(file, { plugins: [[stylisPlugin, options]] }).code;

test("basic transform", t => {
  const input = transform(readFile("simple/input.js"));
  const output = readFile("simple/output.js");
  t.is(input, output);
});

test("throws if expression is used inside template literal", t => {
  t.throws(() => transform('const color = "white"; css`body { background: ${color} }`'));
});

test("should accept options", t => {
  const input = transform(readFile("with-opts/input.js"), { prefix: false });
  const output = readFile("with-opts/output.js");
  t.is(input, output);
});
