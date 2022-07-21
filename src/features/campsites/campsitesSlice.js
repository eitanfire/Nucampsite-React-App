import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectALLCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};