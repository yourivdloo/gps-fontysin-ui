
class UserProfile {
    constructor(pcn, firstname, prefix, lastname, address, addressnumber, addressaddition, city, zipcode, birthday, phonenumber) {
        this.pcn = pcn;
        this.firstname = firstname;
        this.prefix = prefix;
        this.lastname = lastname;
        this.address = address;
        this.addressnumber = addressnumber;
        this.addressaddition = addressaddition;
        this.city = city;
        this.zipcode = zipcode;
        this.birthday = birthday;
        this.phonenumber = phonenumber;
    }
}

module.exports = UserProfile;