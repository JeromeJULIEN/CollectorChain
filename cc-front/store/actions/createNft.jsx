export const STORE_TEMP_PICTURE = 'STORE_TEMP_PICTURE';
export const STORE_PROPERTY = 'STORE_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';

export const deleteProperty = (property) => ({
  type: DELETE_PROPERTY,
  property
});

export const storeProperty = (property,tag) => ({
  type: STORE_PROPERTY,
  property,
  tag
});

export const storeTempPicture = (payload) => ({
  type: STORE_TEMP_PICTURE,
  payload
});