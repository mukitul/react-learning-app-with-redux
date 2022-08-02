export default class FakeBackendService {
    static getCountryList = () => {
        let responseData = {
            "data": {
                "result": [{
                    "name": "Canada",
                    "description": "Dominion of Canada",
                    "name_en": "Canada",
                    "nationality": "Canadian"
                }, {
                    "name": "USA",
                    "description": "United States of America",
                    "name_en": "USA",
                    "nationality": "American"
                }], "isSuccessful": true, "isResult": true, "errorMessages": []
            }
        };
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 0, responseData);
        }).catch(err => {
            // let responseData = new LoginResponseDTO(STATUS.FAILED, err)
            throw new Error(err);
        });

        //return api.get(`${ApiEndPoints.SVS_NLL_URL}/api/v1/common/CountryList`);
    };
}