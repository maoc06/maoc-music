function addProperty(object, newInfo) {
    object.album = {};
    object.album.cover_small = newInfo;
    return object;
}

export default addProperty;