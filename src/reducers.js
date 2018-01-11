import * as Actions from "./actions";

const initialState = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
  isFetching: false,
  error: null
};

export function starWars(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return Object.assign({}, state, {
        films: action.data.films,
        people: action.data.people,
        planets: action.data.planets,
        species: action.data.species,
        starships: action.data.starships,
        vehicles: action.data.vehicles,
        isFetching: false
      });

    case Actions.GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      });
    case Actions.GET_FAILURE:
      console.log("Error:", action.error);
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}
