import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "temperature";
const pathData = "M256 249q29 19 46.5 50t17.5 69q0 30-11.5 56.5t-31 46T232 501t-56 11-56-11-45.5-30.5-31-46T32 368q0-38 17.5-69T96 249V80q0-33 23.5-56.5T176 0t56.5 23.5T256 80v169zm-80 231q23 0 43.5-9t35.5-24 24-35.5 9-43.5q0-28-13-52.5T239 275l-15-9V80q0-20-14-34t-34-14-34 14-14 34v186l-14 9q-23 16-36.5 40.5T64 368q0 23 9 43.5T97 447t35.5 24 43.5 9zM480 48q0 16-16 16H352V32h112q16 0 16 16zm-64 64q0 16-16 16h-48V96h48q16 0 16 16zm48 48q16 0 16 16t-16 16H352v-32h112zm-64 64q16 0 16 16t-16 16h-48v-32h48zm-208 83q21 5 34.5 21.5T240 368q0 27-18.5 45.5T176 432q-26 0-45-18.5T112 368q0-23 14-39.5t34-21.5V176q0-7 5-11.5t11-4.5q16 0 16 16v131z";


registerIcon(name, { pathData });