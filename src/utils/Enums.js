// some fullForm who's shortForm used below
// Ph:palceeholder
// pt:patient
import Regex from '../utils/Regex'
export const globolInputTypes = {
    textType: "text",
    emailType: "email",
    numberType: "number",
    paswrdType: "password",
    radioType: "radio",
    telType: "tel",
    dateType: "date",
    btnType: "button"
}
export default {
    patientFormConstraints: {
        ptNameKey: 'patientName',
        ptEmailKey: 'patientEmail',
        ptDobKey: 'patientDOB',
        ptEmployerKey: 'patientEmployer',
        ptMobNoKey: 'patientMobNumber',
        ptAddressKey: 'patientAddres',
        ptMaritalStatus: 'patientMaritalStatus',

        ptNamePh: "Enter Name",
        ptEmailPh: "Enter Email",
        ptDobPh: "Enter DOB",
        ptMobPh: "Enter Mobile Number",
        ptEmployerPh: "Enter Employer",
        ptAddressPh: "Enter Address",
        ptMaritalStatusPh: 'SelectMaritalStatus'
    },
    globalLocalStorageKeys: {
        patientRecord: 'Patient'
    },

    patientKeyValueRecord: [
        { key: 'patientId', title: "Patient Id", pholder: "Enter id", inputType: globolInputTypes.numberType, pattern: Regex.email, },
        { key: 'patientName', title: "Patient Name", pholder: "Enter Name", inputType: globolInputTypes.textType, pattern: Regex.name, valMsg: 'enter valid name Format i.e must contain four alphabet' },
        { key: 'patientEmail', title: "Patient Email", pholder: "Enter Email", inputType: globolInputTypes.emailType, pattern: Regex.email, valMsg: 'enter valid email format i.e a@gmail.com' },
        { key: 'patientDOB', title: "Patient DOB", pholder: "Enter DOB", inputType: globolInputTypes.dateType, valMsg: "selected Dob is greater than currentDate" },
        { key: 'patientEmployer', title: "Patient Employer", pholder: "Enter Employer", inputType: globolInputTypes.textType, pattern: Regex.organizationName, valMsg: "Enter valid organization name i.e Herbal & Product" },
        { key: 'patientMobNumber', title: "Patient Mob No", pholder: "Enter Mobile Number", inputType: globolInputTypes.telType, pattern: Regex.pkCellNo, valMsg: "Follw PK Mobno format i.e 11 digit" },
        { key: 'patientAddres', title: "Patient Address", pholder: "Enter Address", inputType: globolInputTypes.textType, pattern: Regex.name, valMsg: "enter address i.e (253 N. Cherry St)or 345 P. Cherry st." },
        { key: 'actions', title: "Actions" },
    ],
}



