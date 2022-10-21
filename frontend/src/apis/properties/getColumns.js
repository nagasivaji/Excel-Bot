// importing axios for request
import axios from "axios";

async function getColumns() {
    var result = "--";
    await axios.get("http://localhost:8000/api/properties/getColumns")
        .then((res) => {
            //console.log('response:', res.data);
            result = res.data;
        }).catch((err) => {
            console.log('error:', err);
            result = err;
        });
    return result;
}

export default getColumns;