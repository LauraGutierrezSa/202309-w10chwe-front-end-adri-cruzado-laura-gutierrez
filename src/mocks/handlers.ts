import { http, HttpResponse } from "msw";
import { robotsMock } from "./robots/robotsMock";

const apiUrl = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${apiUrl}/robots`, () => {
    return HttpResponse.json(robotsMock);
  }),
];

export default handlers;
