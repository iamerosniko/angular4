import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = '';

    constructor(private http:Http){
        
    }

    public async getAll(controller:string){
        this.apiUrl=AppSettings.GETAPIURL(controller);
        var result=await this._getAll();
        return new Promise<any[]>((resolve)=> resolve(result));
    }

    public async getOne(controller:string){
        this.apiUrl=AppSettings.GETAPIURL(controller);
        var result=await this._getAll();
        return new Promise<any>((resolve)=> resolve(result));
    }

    public async putData(controller:string,data:any,id:string){
        this.apiUrl=AppSettings.GETAPIURL(controller);
        var result=await this._putData(data,id);
        return new Promise<any>((resolve)=> resolve(result));
    }
    //returns the data you posted
    public async postData(controller:string,data:any,id:string){
        this.apiUrl=AppSettings.GETAPIURL(controller);
        var result=await this._postData(data);
        return new Promise<any>((resolve)=> resolve(result));
    }
    
    public async deleteData(controller:string,data:any,id:string){
        this.apiUrl=AppSettings.GETAPIURL(controller);
        var result=await this._deleteData(data);
        return new Promise<any>((resolve)=> resolve(result));
    }
    
    private _getAll(): Promise<any[]> {  
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }

    private _getOne(): Promise<any>{
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }  

    private _postData(entity:any): Promise<any>{
        return this.http
          .post(this.apiUrl, JSON.stringify(entity), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(AppSettings.handleError);
    }

    private _putData(entity:any,ID:string):Promise<any>{
        const url = `${this.apiUrl}/${ID}`;
        return this.http
            .put(url, JSON.stringify(entity), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }

    private _deleteData(ID:string):Promise<any>{
        const url = `${this.apiUrl}/${ID}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }
}
