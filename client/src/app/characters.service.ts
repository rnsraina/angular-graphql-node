import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {GET_USER, GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER} from './graphql/graphql.queries';

export interface UserDetail {
  name: string,
  age: number,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private apollo: Apollo) {}

  updateUser(userData: any) {
    return this.apollo.mutate({
      mutation: UPDATE_USER,
      variables: {
        _id: userData.id,
        name: userData.uName,
        age: userData.userDetails.uAge,
        email: userData.userDetails.uEmail
      },
      refetchQueries: [{
        query: GET_USERS
      }]
    });
  }
  addUser(userData: any) {
    return this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        name: userData.uName,
        age: userData.userDetails.uAge,
        email: userData.userDetails.uEmail
      },
      refetchQueries: [{
        query: GET_USERS
      }]
    });
  }

  showUsers() {
    return this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges;
  }

  getUser(userId: string) {
    return this.apollo.watchQuery({
      query: GET_USER,
      variables: {
        _id: userId
      }
    }).valueChanges;
  }

  deleteUser(userId: string) {
    return this.apollo.mutate({
      mutation: DELETE_USER,
      variables: {
        _id: userId
      },
      refetchQueries: [{
        query: GET_USERS
      }]
    })
  }
}
