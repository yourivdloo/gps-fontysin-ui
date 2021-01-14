
class UserProfile {
    pcn = 0;
    firstName = "";
    prefix = "";
    lastName = "";
    emailAddress = "";
    privacySettings = 0;
    nationality = "";
    address = "";
    city = "";
    zipCode = "";
    birthday = "";
    birthPlace = "";
    phoneNumber = "";
    
    studies = [];
    jobs = [];
    hobbies = [];
    interests = [];
    languages = [];
    licenses = [];
    participations = [];
    personalityTraits = [];
    references = [];
    skills = [];

    constructor(pcn, firstname, prefix, lastname, address, city, zipcode, birthday, phonenumber) {
        this.pcn = pcn;
        this.firstName = firstname;
        this.prefix = prefix;
        this.lastName = lastname;
        this.address = address;
        this.city = city;
        this.zipCode = zipcode;
        this.birthday = birthday;
        this.phoneNumber = phonenumber;
    }

    loadFromObject(object){
        this.pcn = object.pcn;
        this.firstName = object.firstName;
        this.prefix = object.prefix;
        this.lastName = object.lastName;
        this.emailAddress = object.emailAddress;
        this.privacySettings = object.privacySettings;
        this.nationality = object.nationality;
        this.address = object.address;
        this.city = object.city;
        this.zipCode = object.zipCode;
        this.birthday = object.birthday;
        this.birthPlace = object.birthPlace;
        this.phoneNumber = object.phoneNumber;

        this.studies = object.userProperties.studies;
        this.jobs = object.userProperties.jobs;
        this.hobbies = object.userProperties.hobbies;
        this.interests = object.userProperties.interests;
        this.languages = object.userProperties.languages;
        this.licenses = object.userProperties.licenses;
        this.participations = object.userProperties.participations;
        this.personalityTraits = object.userProperties.personalityTraits;
        this.references = object.userProperties.references;
        this.skills = object.userProperties.skills;
    }
}

export default UserProfile;