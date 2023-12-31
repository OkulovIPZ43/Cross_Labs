const request = require('supertest');
const api = request('http://127.0.0.1:5000')

describe('ISOCountryCodeControllerTest', () => {

    it('GetCountryCodes_Return200AndAutoGeneratedCodes', async () => {
        const response = await api.get('/iso-country-codes').timeout(5000);
        expect(response.status).toBe(200); 
        expect(response.body).toEqual(
            [
                {
                    "countryCode": "CA",
                    "countryName": "Canada"
                },
                {
                    "countryCode": "ES",
                    "countryName": "Spain"
                },
                {
                    "countryCode": "GB",
                    "countryName": "United Kingdom"
                },
                {
                    "countryCode": "UA",
                    "countryName": "Ukraine"
                },
                {
                    "countryCode": "US",
                    "countryName": "United States of America"
                }
            ]
        ); 
    });

    it('GetCountryCodesByCode_Return200AndAutoGeneratedCodesWithCode', async () => {
        const response = await api.get('/iso-country-codes/US');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            [
                {
                    "countryCode": "US",
                    "countryName": "United States of America"
                }
            ]
        );
    });
});


describe('CustomerControllerTest', () => {

    it('GetCustomers_Return200AndAutoGeneratedCustomers', async () => {
        const response = await api.get('/customers').timeout(5000);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            [
                {
                    "customerId": 1,
                    "dateOfBirth": "2000-05-15T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "UA",
                    "isoCountryName": "Ukraine",
                    "country": "Ukraine",
                    "addressLine1": "Shevchenko Street",
                    "addressLine2": "Apt 56",
                    "addressLine3": "Building 1",
                    "cityTown": "Kyiv",
                    "postcode": "01001"
                },
                {
                    "customerId": 2,
                    "dateOfBirth": "2002-06-01T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "UA",
                    "isoCountryName": "Ukraine",
                    "country": "Ukraine",
                    "addressLine1": "Vasylkyvska Street",
                    "addressLine2": "Apt 2",
                    "addressLine3": "Building 2",
                    "cityTown": "Kyiv",
                    "postcode": "03036"
                },
                {
                    "customerId": 3,
                    "dateOfBirth": "1983-02-02T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "US",
                    "isoCountryName": "United States of America",
                    "country": "USA",
                    "addressLine1": "Main Street",
                    "addressLine2": "Suite 100",
                    "addressLine3": "Building 3",
                    "cityTown": "New York",
                    "postcode": "10001"
                },
                {
                    "customerId": 4,
                    "dateOfBirth": "1967-11-15T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "GB",
                    "isoCountryName": "United Kingdom",
                    "country": "UK",
                    "addressLine1": "High Street",
                    "addressLine2": "Flat 5",
                    "addressLine3": "Building 4",
                    "cityTown": "London",
                    "postcode": "SW1A 1AA"
                },
                {
                    "customerId": 5,
                    "dateOfBirth": "1999-09-06T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "CA",
                    "isoCountryName": "Canada",
                    "country": "Canada",
                    "addressLine1": "Queen Street",
                    "addressLine2": "Unit 3",
                    "addressLine3": "Building 5",
                    "cityTown": "Toronto",
                    "postcode": "M5H 2M9"
                }
            ]
        );
    });

    it('GetCountryCodesByDates_Return200AndAutoGenerated—ustomersBetweenDates', async () => {
        const response = await api.get('/customers/between-dates?startDate=1967-1-1&endDate=2000-1-1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            [
                {
                    "customerId": 3,
                    "dateOfBirth": "1983-02-02T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "US",
                    "isoCountryName": "United States of America",
                    "country": "USA",
                    "addressLine1": "Main Street",
                    "addressLine2": "Suite 100",
                    "addressLine3": "Building 3",
                    "cityTown": "New York",
                    "postcode": "10001"
                },
                {
                    "customerId": 4,
                    "dateOfBirth": "1967-11-15T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "GB",
                    "isoCountryName": "United Kingdom",
                    "country": "UK",
                    "addressLine1": "High Street",
                    "addressLine2": "Flat 5",
                    "addressLine3": "Building 4",
                    "cityTown": "London",
                    "postcode": "SW1A 1AA"
                },
                {
                    "customerId": 5,
                    "dateOfBirth": "1999-09-06T00:00:00",
                    "otherDetails": "",
                    "isoCountryCode": "CA",
                    "isoCountryName": "Canada",
                    "country": "Canada",
                    "addressLine1": "Queen Street",
                    "addressLine2": "Unit 3",
                    "addressLine3": "Building 5",
                    "cityTown": "Toronto",
                    "postcode": "M5H 2M9"
                }
            ]
        );
    });
});