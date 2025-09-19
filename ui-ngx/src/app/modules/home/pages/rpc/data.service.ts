///
/// Copyright © 2016-2025 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

    // src/app/data.service.ts

    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { AuthService } from '@core/auth/auth.service';
    import { Observable } from 'rxjs';

    interface CardData {
      id: number;
      title: string;
      description: string;
    }

    @Injectable({
      providedIn: 'root'
    })
    export class DataService {
      private dataUrl = '/assets/data.json';
      constructor(private http: HttpClient) {
        console.log(this.dataUrl);
        }

      getCardData(): Observable<CardData[]> {
        const token = AuthService.getJwtToken();
         console.log('Fetched cards:', token);
        return this.http.get<CardData[]>(this.dataUrl);
      }
    }
