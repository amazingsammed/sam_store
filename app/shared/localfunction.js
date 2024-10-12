

export  function SetState() {
    try {
        const data = localStorage.getItem("state");

        if (data===null) {
            localStorage.setItem("state", '0');
            return "0";
        } else {
            console.log(data,'localStorage');
             localStorage.setItem("state", data ==="0" ?"1":'0');
           return  data ==="0" ?"1":'0';
        }
    } catch (err) {
        return '0';
    }
}