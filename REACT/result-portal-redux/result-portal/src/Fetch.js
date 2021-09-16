export default function Fetch (
    Url,
    Method,
    Data = null,
    isFormData = false,
    stringify = true
  ) {
    if (Data && stringify) {
      Data = JSON.stringify(Data);
    }
    let headers = {
      cor: "no-cors",
      Authorization: `Bearer ${
        localStorage.getItem("token") ? localStorage.getItem("token") : ""
      }`}
    if(!isFormData){
      headers = {...headers,"content-type":"application/json"}
    }
    var Response = fetch(Url, {
      method: Method,
      body: Data,
      headers: headers,
    });
    Response.then((data) => {
      if (data.status == 401 || data.statusText == "Unauthorized") {
        localStorage.clear();
        window.location.href = "/";
      }
    });
    Response = Response.then((res) => res.json());
    return Response;
  }