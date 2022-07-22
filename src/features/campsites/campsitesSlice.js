import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectALLCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(campsite => campsite.id === id);
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};