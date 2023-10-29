import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) {}

  addPokemon(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/pokemonList', data);
  };
  
  getPokemon(): Observable<any> {
    return this._http.get('http://localhost:3000/pokemonList');
  };

  generatePokemon(data: any): Observable<any> {
    // const headers = new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('x-csrf-protection', '1')
    // .set('cookies', '_ga=GA1.1.1355812665.1698584300; fbm_717819133352388=base_domain=.gencraft.com; fbsr_717819133352388=dox8KkkjoiPf0oov-bJD9CDi9DLpWD5QM9dGyCU8t-c.eyJ1c2VyX2lkIjoiNjk3OTI5MzQwNTQ2MDE2MyIsImNvZGUiOiJBUUJmeG1lUmRTN0s5bE1jWFVCZjBIVFV5RDA3MXlYVzFpVVg2SHVranlsdWRKaU1Eekc0WERSQklRTkYwTW14czZVdG53SHpjRjVlb2RuQ3UyRS1YWl9MbVdBcjR2MzhCbndLY2sydXNnN2EzRkVCbHUtTE5HTFV6TC12ak5zclFKUXJnRnRBNkp5TFNQUU5RS0t2STNNWG1vOXJ0UTJyNnFZVEJ2bE9LN0dlQ3dGSl9Ka2ZvbHJQVE1lbU5WZFZyWFpoTFdVZHprQmR0YVBad09HVE9lbHRzWjZxaC1NaEdLSThKc19BMHloU2cyX2JQRHFuQkozNTdJdlpQdU1Od1pWQjkwTTM3RTdlYVRpNG5Ob3A3ck1WTXlpUlhMdzlrak9heElfN3E4Rjk1bThxdWhKZVpqRTJnc283Y1lTRkhDMXhLb1RObU5KalF5TXlBYmVKdlhFRyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjk4NTg0MzAwfQ; SESSION_ID=m/SaagdV+VOBH84SAAAAAAAAAFwxgFtTR1EMAHTGvBr/QkRi9qt9qYZhCwizWLAXJvafZ+UrwyYx45lxlt1c66Rmaa4ijCOcPPQ1FA3bIJ2UCcNyA2XxwePnQ9Pn51jul7t8Upm481d8F8AdM1ZI4a8IAPJ2QbzH2FylFHsEFII; _ga_5Y6VWJWF5G=GS1.1.');
    return this._http.post(
      'https://api.gencraft.com/api/v6/prompt/generate',
      data,
      {
        headers: {
          // 'cookies': '_ga=GA1.1.1355812665.1698584300; fbm_717819133352388=base_domain=.gencraft.com; fbsr_717819133352388=dox8KkkjoiPf0oov-bJD9CDi9DLpWD5QM9dGyCU8t-c.eyJ1c2VyX2lkIjoiNjk3OTI5MzQwNTQ2MDE2MyIsImNvZGUiOiJBUUJmeG1lUmRTN0s5bE1jWFVCZjBIVFV5RDA3MXlYVzFpVVg2SHVranlsdWRKaU1Eekc0WERSQklRTkYwTW14czZVdG53SHpjRjVlb2RuQ3UyRS1YWl9MbVdBcjR2MzhCbndLY2sydXNnN2EzRkVCbHUtTE5HTFV6TC12ak5zclFKUXJnRnRBNkp5TFNQUU5RS0t2STNNWG1vOXJ0UTJyNnFZVEJ2bE9LN0dlQ3dGSl9Ka2ZvbHJQVE1lbU5WZFZyWFpoTFdVZHprQmR0YVBad09HVE9lbHRzWjZxaC1NaEdLSThKc19BMHloU2cyX2JQRHFuQkozNTdJdlpQdU1Od1pWQjkwTTM3RTdlYVRpNG5Ob3A3ck1WTXlpUlhMdzlrak9heElfN3E4Rjk1bThxdWhKZVpqRTJnc283Y1lTRkhDMXhLb1RObU5KalF5TXlBYmVKdlhFRyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjk4NTg0MzAwfQ; SESSION_ID=m/SaagdV+VOBH84SAAAAAAAAAFwxgFtTR1EMAHTGvBr/QkRi9qt9qYZhCwizWLAXJvafZ+UrwyYx45lxlt1c66Rmaa4ijCOcPPQ1FA3bIJ2UCcNyA2XxwePnQ9Pn51jul7t8Upm481d8F8AdM1ZI4a8IAPJ2QbzH2FylFHsEFII; _ga_5Y6VWJWF5G=GS1.1.',
          // 'x-csrf-protection': '1',
          'authority': 'api.gencraft.com',
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'content-type': 'application/json',
          'cookie': '_ga=GA1.1.1355812665.1698584300; fbm_717819133352388=base_domain=.gencraft.com; SESSION_ID=m/SaagdV+VOBH84SAAAAAAAAAFwxgFtTR1EMAHTGvBr/QkRi9qt9qYZhCwizWLAXJvafZ+UrwyYx45lxlt1c66Rmaa4ijCOcPPQ1FA3bIJ2UCcNyA2XxwePnQ9Pn51jul7t8Upm481d8F8AdM1ZI4a8IAPJ2QbzH2FylFHsEFII; _ga_5Y6VWJWF5G=GS1.1.1698593714.3.1.1698593725.0.0.0',
          'origin': 'https://gencraft.com',
          'referer': 'https://gencraft.com/',
          'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
          'x-csrf-protection': '1'
        }
      }
    );
  };
}
