import {
    CREATE_GAME,
    RETRIEVE_GAMES,
    UPDATE_GAME,
    DELETE_GAME,
    DELETE_ALL_GAMES
} from "./types";

import GameDataService from "../services/game.service";

export const createGame = (name, description) => async (dispatch) => {
    try {
        const res = await GameDataService.create({ name, description });

        dispatch({
            type: CREATE_GAME,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveGames = () => async (dispatch) => {
    try {
        const res = await GameDataService.getAll();

        dispatch({
            type: RETRIEVE_GAMES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateGame = (id, data) => async (dispatch) => {
    try {
        const res = await GameDataService.update(id, data);

        dispatch({
            type: UPDATE_GAME,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteGame = (id) => async (dispatch) => {
    try {
        await GameDataService.delete(id);

        dispatch({
            type: DELETE_GAME,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllGames = () => async (dispatch) => {
    try {
        const res = await GameDataService.deleteAll();

        dispatch({
            type: DELETE_ALL_GAMES,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findGamesByName = (name) => async (dispatch) => {
    try {
        const res = await GameDataService.findByName(name);
        dispatch({
            type: RETRIEVE_GAMES,
            payload: res.data,
        });

    } catch (err) {
        console.log(err);
    }
};