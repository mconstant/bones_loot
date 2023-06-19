// @ts-ignore
import yaml from 'js-yaml';
// @ts-ignore
import fs from 'fs';

import { RandomPicker } from "./randomPicker.js";

const familiars_yaml = 'lootverse/familiars.yaml';
const familiar_threads_yaml = 'lootverse/familiar_threads.yaml';

const familiars = yaml.load(fs.readFileSync(familiars_yaml, {encoding: 'utf-8'}));
const familiar_threads = yaml.load(fs.readFileSync(familiar_threads_yaml, {encoding: 'utf-8'}));

let familiar_picker = new RandomPicker(familiars);
let familiar_threads_picker = new RandomPicker(familiar_threads);

// console.log(familiars)

const distinct_familiars = familiar_picker.pickManyDistinct(16)
const distinct_familiar_threads = familiar_threads_picker.pickManyDistinct(16)

const zipped = distinct_familiars.map((e, i) => {
    return ['familiar: ' + e, 'familiar_threads: ' + distinct_familiar_threads[i]]
})

console.log(zipped)



