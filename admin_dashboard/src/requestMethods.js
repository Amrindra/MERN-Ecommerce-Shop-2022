import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2U3YjZiZTU3NzBjNTljMjMxZDdiYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzA2Mzc3MywiZXhwIjoxNjUzMjM2NTczfQ.gWIbBftWsTPhXQsUEsDH76olsRmbHxuzHvPZBwrdmKg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
