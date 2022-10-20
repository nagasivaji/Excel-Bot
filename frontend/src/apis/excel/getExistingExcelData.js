// importing axios for request
import axios from "axios";

async function getExistingExcelData() {
    var result = "--";
    await axios.get("http://localhost:8000/api/excel/getExcels/?username=sivaji")
        .then((res) => {
            //console.log('response:', res.data);
            //console.log(res.data.length);
            var temp = [];
            res.data.forEach((item) => {
                ///////////////////////////console.log('item:', item);
                temp.push(item.name);
            })
            result = temp;
        }).catch((err) => {
            console.log('error:', err);
            result = err;
        });
    return result;
}

export default getExistingExcelData;