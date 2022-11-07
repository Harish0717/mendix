// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @param {string} key
 * @param {string} value
 * @returns {Promise.<boolean>}
 */
async function SetCookie(key, value) {
    // BEGIN USER CODE
    try {
        document.cookie = key + "=" + value + ";";
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
    // END USER CODE
}

export { SetCookie };
