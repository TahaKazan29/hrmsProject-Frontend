import axios from "axios";

export default class DriverLicenseService {

    async getDriverLicenses(){
        return await axios.get("http://localhost:8080/api/driverLicenses/getall");
    }

} 