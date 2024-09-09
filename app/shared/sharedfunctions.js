

export function toJson(formData){

    const object = {};
    formData.forEach(function(value, key){
    object[key] = value;
});
    return  object;
}
