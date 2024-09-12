

export function toJson(formData){

    const object = {};
    formData.forEach(function(value, key){
    object[key] = value;
});
    return  object;
}

function formDataToJson(formData) {
    const jsonObject = {};

    formData.forEach((value, key) => {
        // Handle multiple values for the same key (e.g., checkboxes)
        if (jsonObject.hasOwnProperty(key)) {
            if (!Array.isArray(jsonObject[key])) {
                jsonObject[key] = [jsonObject[key]];
            }
            jsonObject[key].push(value);
        } else {
            jsonObject[key] = value;
        }
    });

    return jsonObject;
}
