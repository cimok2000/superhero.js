import Axios from "axios";
import chalk from "chalk";
import { ICharacterID, ICharacterName } from "./types/characterTypes";

class Superheroes {
  version: string;
  url: string;
  accessToken: string;

  constructor(token: string) {
    this.version = "v4";
    this.url = `https://superheroapi.com/api/`;
    this.accessToken = token;
  }

  parseError(error: any) {
    console.log(error);
    return {
      code: error.response.status,
      text: error.response.statusText,
    };
  }

  async getRequest(endpoint: string, params?: string) {
    const requestUrl = params ? `${this.url}/${this.accessToken}/${endpoint}?${params}` : `${this.url}/${this.accessToken}/${endpoint}`;
    console.log(`GET ${requestUrl}`);
    try {
      const req = await Axios.get(requestUrl);
      return { data: req.data, error: null };
    } catch (error) {
      return { data: null, error: this.parseError(error) };
    }
  }

  async validate() {
    const { data, error } = await this.getRequest("1");
    if (data) return { data: true, error };
    else return { data: false, error };
  }

  async superheroName(name: string) {
    const { data, error } = await this.getRequest(`search/${name}`);
    const _data = data as ICharacterName;
    return { data: _data, error: error };
  }

  async superheroID(id: string) {
    const { data, error } = await this.getRequest(id);
    const _data = data as ICharacterID;
    return { data: _data, error: error };
  }
}

export default Superheroes;
