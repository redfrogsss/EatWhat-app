import { API_URL } from "@env";

export default function getAPI() {
    if (API_URL != undefined) { return API_URL; }
    else { return "http://192.168.3.59:8000"; }
}