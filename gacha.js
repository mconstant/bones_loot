// @ts-ignore
import yaml from 'js-yaml';
// @ts-ignore
import fs from 'fs';

import { RandomPicker } from "./randomPicker.js";

const familiars_yaml = 'lootverse/familiars.yaml';

const familiars = yaml.load(fs.readFileSync(familiars_yaml, {encoding: 'utf-8'}));

let picker;
picker = new RandomPicker(familiars);

// console.log(familiars)

console.log(picker.pickManyDistinct(16))



