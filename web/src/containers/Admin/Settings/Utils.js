import { validateRequired, email, exchangeName, urlCheck } from '../../../components/AdminForm/validations';
import { COUNTRIES_OPTIONS } from '../../../utils/countries';

export const generateAdminSettings = (key) => {
    if (key === 'security') {
        return {
            whitelist: {
                type: 'input',
                label: 'Admin whitelist',
                placeholder: 'Admin whitelist',
                validate: [validateRequired]
            },
            allowed_domains: {
                type: 'input',
                label: 'Allowed domains',
                placeholder: 'Allowed domains',
                validate: [validateRequired]
            },
            site_key: {
                type: 'input',
                label: 'Captcha site key',
                placeholder: 'Captcha site key',
                validate: [validateRequired]
            },
            secret_key: {
                type: 'input',
                label: 'Captcha secret key',
                placeholder: 'Captcha secret key',
                validate: [validateRequired]
            }
        };
    } else if (key === 'email') {
        return {
            sender: {
                type: 'input',
                label: 'Sender email',
                placeholder: 'Sender email',
                validate: [validateRequired, email]
            },
            timezone: {
                type: 'select',
                label: 'Email timezone',
                placeholder: 'Select email timezone',
                validate: [validateRequired],
                options: minimalTimezoneSet
            },
            support: {
                type: 'input',
                label: 'Support email',
                placeholder: 'Support email',
                validate: [validateRequired, email]
            },
            admin: {
                type: 'input',
                label: 'Admin email',
                placeholder: 'admin email',
                validate: [validateRequired, email]
            },
            server: {
                type: 'input',
                label: 'SMTP server',
                placeholder: 'SMTP sever',
                validate: [validateRequired]
            },
            port: {
                type: 'input',
                label: 'SMTP port',
                placeholder: 'SMTP port',
                validate: [validateRequired]
            },
            user: {
                type: 'input',
                label: 'SMTP username',
                placeholder: 'SMTP username',
                validate: [validateRequired]
            },
            password: {
                type: 'password',
                label: 'SMTP password',
                placeholder: 'SMTP password',
                validate: [validateRequired]
            }
        };
    } else {
        return {
            api_name: {
                type: 'input',
                label: 'API name',
                placeholder: 'API name',
                validate: [validateRequired, exchangeName]
            },
            new_user_is_activated: {
                type: 'checkbox',
                label: 'New user is activated',
                // placeholder: 'New user is activated',
                // validate: [validateRequired]
            },
            language: {
                type: 'select',
                label: 'Default language',
                placeholder: 'Select default language',
                validate: [validateRequired],
                options: [
                    { label: 'English', value: 'en' },
                    { label: 'Korean', value: 'ko' }
                ]
            },
            theme: {
                type: 'select',
                label: 'Default theme',
                placeholder: 'Select default theme',
                validate: [validateRequired],
                options: [
                    { label: 'White', value: 'white' },
                    { label: 'Dark', value: 'dark' }
                ]
            },
            logo_path: {
                type: 'input',
                label: 'Logo path',
                placeholder: 'Logo path',
                validate: [validateRequired, urlCheck]
            },
            logo_black_path: {
                type: 'input',
                label: 'Logo path in Dark theme',
                placeholder: 'Logo path in Dark theme',
                validate: [validateRequired, urlCheck]
            },
            valid_languages: {
                type: 'select',
                label: 'Valid languages',
                placeholder: 'Valid languages',
                validate: [validateRequired],
                multiSelect: true,
                options: [
                    { label: 'English', value: 'en' },
                    { label: 'Korean', value: 'ko' }
                ]
            },
            country: {
                type: 'select',
                label: 'Default country',
                placeholder: 'Select default country',
                validate: [validateRequired],
                options: [
                    { label: 'Global', value: 'global' },
                    ...COUNTRIES_OPTIONS
                ]
            }
        };
    }
};

export const minimalTimezoneSet = [
    { offset: '', label: 'UTC', value: 'UTC' },
    { offset: '-11:00', label: '(GMT-11:00) Pago Pago', value: 'Pacific/Pago_Pago' },
    { offset: '-10:00', label: '(GMT-10:00) Hawaii Time', value: 'Pacific/Honolulu' },
    { offset: '-10:00', label: '(GMT-10:00) Tahiti', value: 'Pacific/Tahiti' },
    { offset: '-09:00', label: '(GMT-09:00) Alaska Time', value: 'America/Anchorage' },
    { offset: '-08:00', label: '(GMT-08:00) Pacific Time', value: 'America/Los_Angeles' },
    { offset: '-07:00', label: '(GMT-07:00) Mountain Time', value: 'America/Denver' },
    { offset: '-06:00', label: '(GMT-06:00) Central Time', value: 'America/Chicago' },
    { offset: '-05:00', label: '(GMT-05:00) Eastern Time', value: 'America/New_York' },
    { offset: '-04:00', label: '(GMT-04:00) Atlantic Time - Halifax', value: 'America/Halifax' },
    { offset: '-03:00', label: '(GMT-03:00) Buenos Aires', value: 'America/Argentina/Buenos_Aires' },
    { offset: '-02:00', label: '(GMT-02:00) Sao Paulo', value: 'America/Sao_Paulo' },
    { offset: '-01:00', label: '(GMT-01:00) Azores', value: 'Atlantic/Azores' },
    { offset: '+00:00', label: '(GMT+00:00) London', value: 'Europe/London' },
    { offset: '+01:00', label: '(GMT+01:00) Berlin', value: 'Europe/Berlin' },
    { offset: '+02:00', label: '(GMT+02:00) Helsinki', value: 'Europe/Helsinki' },
    { offset: '+03:00', label: '(GMT+03:00) Istanbul', value: 'Europe/Istanbul' },
    { offset: '+04:00', label: '(GMT+04:00) Dubai', value: 'Asia/Dubai' },
    { offset: '+04:30', label: '(GMT+04:30) Kabul', value: 'Asia/Kabul' },
    { offset: '+05:00', label: '(GMT+05:00) Maldives', value: 'Indian/Maldives' },
    { offset: '+05:30', label: '(GMT+05:30) India Standard Time', value: 'Asia/Calcutta' },
    { offset: '+05:45', label: '(GMT+05:45) Kathmandu', value: 'Asia/Kathmandu' },
    { offset: '+06:00', label: '(GMT+06:00) Dhaka', value: 'Asia/Dhaka' },
    { offset: '+06:30', label: '(GMT+06:30) Cocos', value: 'Indian/Cocos' },
    { offset: '+07:00', label: '(GMT+07:00) Bangkok', value: 'Asia/Bangkok' },
    { offset: '+08:00', label: '(GMT+08:00) Hong Kong', value: 'Asia/Hong_Kong' },
    { offset: '+08:30', label: '(GMT+08:30) Pyongyang', value: 'Asia/Pyongyang' },
    { offset: '+09:00', label: '(GMT+09:00) Seoul', value: 'Asia/Tokyo' },
    { offset: '+09:30', label: '(GMT+09:30) Central Time - Darwin', value: 'Australia/Darwin' },
    { offset: '+10:00', label: '(GMT+10:00) Eastern Time - Brisbane', value: 'Australia/Brisbane' },
    { offset: '+10:30', label: '(GMT+10:30) Central Time - Adelaide', value: 'Australia/Adelaide' },
    { offset: '+11:00', label: '(GMT+11:00) Eastern Time - Melbourne, Sydney', value: 'Australia/Sydney' },
    { offset: '+12:00', label: '(GMT+12:00) Nauru', value: 'Pacific/Nauru' },
    { offset: '+13:00', label: '(GMT+13:00) Auckland', value: 'Pacific/Auckland' },
    { offset: '+14:00', label: '(GMT+14:00) Kiritimati', value: 'Pacific/Kiritimati' }
  ];
