import axios from "axios";
import { ICEPResponse, IOwnerRequest, OwnerDTO } from "../dtos";

export async function AddressCheck(data: IOwnerRequest): Promise<OwnerDTO> {
  const response: ICEPResponse = await (await axios.get(`https://viacep.com.br/ws/${data.zip_code}/json/`)).data
  
  const ownerAddress: OwnerDTO = {
    city: response.localidade,
    address: response.logradouro,
    uf: response.uf,
    district: response.bairro,
    ...data,
  }

  return ownerAddress;
}