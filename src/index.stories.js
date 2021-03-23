import "./index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "left",
  },
};

export const story = () => html` <my-counter></my-counter> `;
