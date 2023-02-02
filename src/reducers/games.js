import {
    CREATE_GAME,
    RETRIEVE_GAMES,
    UPDATE_GAME,
    DELETE_GAME,
    DELETE_ALL_GAMES,
} from "../actions/types";

const initialState = [];

function gameReducer(games = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_GAME:
            return [...games, payload];

        case RETRIEVE_GAMES:
            return payload;

        case UPDATE_GAME:
            return games.map((game) => {
                if (game.id === payload.id) {
                    return {
                        ...game,
                        ...payload,
                    };
                } else {
                    return game;
                }
            });

        case DELETE_GAME:
            return games.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_GAMES:
            return [];

        default:
            return games;
    }
};

export default gameReducer