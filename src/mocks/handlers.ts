import { http, HttpResponse } from "msw";
import { robotsMock } from "./robots/robotsMock";

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/robots`, () => {
    return HttpResponse.json(robotsMock);
  }),
];

export default handlers;
