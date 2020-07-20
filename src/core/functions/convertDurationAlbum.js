function convertDurationAlbum(duration) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let hrLabel = hours > 1 ? "hrs" : "hr";
    let minLabel = minutes > 1 ? "mins" : "min";
    if (hours === 0) return `${minutes} ${minLabel}`;
    return `${hours} ${hrLabel} ${minutes} ${minLabel}`;
}

export default convertDurationAlbum;