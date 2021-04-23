const CONSTANTS = Object.freeze({
    MIN_PLAYERS: 2,

    MESSAGE_TYPE_KEY: 'MESSAGE_TYPE',
    MESSAGE_TYPE: {
        START_ROUND: 'STARTROUND',
        END_ROUND: 'ENDROUND',
        ROUND_INSTRUCTIONS: 'ROUNDINSTRUCTIONS',
    },

    ROUND_KEY: 'ROUND',
    ROUNDS: {
        LOBBY: 'LOBBY',
    },

    DATA_KEY: 'DATA',
});

export default CONSTANTS;
