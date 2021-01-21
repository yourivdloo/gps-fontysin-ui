
const pcn = 427540; // pcn jack test


export function getHeader(userPcn = false){
    var header = {};

    var currentPcn = userPcn ? userPcn : pcn;

    if(baseUrl === "http://localhost:8080"){
        header = {
            'x-ms-client-principal-name': currentPcn + '@student.fontys.nl'
        }
    }

    return header;
}



var baseUrl = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:8080" : "";

export default baseUrl;