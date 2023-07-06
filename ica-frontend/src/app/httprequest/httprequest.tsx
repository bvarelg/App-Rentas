import axios, { AxiosResponse } from "axios";

export const post = async (url: string, formData: any, cbResponse: (arg0: AxiosResponse<any, any>) => void) => {
    try {
        const data = await axios.post(url, formData) 
        cbResponse(data)
            
    } catch (error) {
        console.log(error);
    }
}
