
// importing axios for request
import axios from "axios";

async function getExcel (){
    var result = "--";

    // API
    const load = async() => {
        // Axios
        await axios.get("http://localhost:8000/api/excel/getExcel")
        .then((res)=>{
            console.log('response:', res.data);
            result = res.data;
        }).catch((err)=>{
            console.log('error:', err);
            result = err;
        });
    }

    await load();
    return result;

}

export default getExcel;