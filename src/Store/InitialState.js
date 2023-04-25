import darkhanIMG from '../assets/imgs/home/doctors/darkhan.jpg'
import erkinIMG from '../assets/imgs/home/doctors/erkin.jpg'
import samatIMG from '../assets/imgs/home/doctors/Samat.jpg'
import r1IMG from '../assets/imgs/profile/carts/cart1.jpg'
import r2IMG from '../assets/imgs/profile/carts/cart2.jpeg'
import r3IMG from '../assets/imgs/profile/carts/cart3.avif'

import trypsin from '../assets/imgs/home/drugs/trypsin.jpg'
import aziobiot from '../assets/imgs/home/drugs/aziabiot.webp'
import nopezam from '../assets/imgs/home/drugs/nozepam.jpg'

import ansar from '../assets/imgs/home/clinics/ansar.jpg'
import green from '../assets/imgs/home/clinics/green.jpg'
import medExpress from '../assets/imgs/home/clinics/medExpress.jpg'

import profile_img from '../assets/imgs/profile_img.jpg'

export let InitialState = {
    profile: {
        id: 1,
        iin: '010622152635',
        full_name: 'Jenis Dumanov',
        profile_img: profile_img,
        phone: '8 (707) 999 3938',
        city: 'Astana',
        address: 'Samgau 5/2',
        records: [{
            record_id: 1,
            doctor: {
                id: 3,
                full_name: 'Erbol Erkin',
                img: erkinIMG
            },
            record_img: r1IMG,
            title: 'AIDS/HIV infection',
            description: 'Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body\'s ability to fight infection and disease.\n' +
                '\n' +
                'HIV is a sexually transmitted infection (STI). It can also be spread by contact with infected blood and from illicit injection drug use or sharing needles. It can also be spread from mother to child during pregnancy, childbirth or breastfeeding. Without medication, it may take years before HIV weakens your immune system to the point that you have AIDS.',
            date: '15/03/2023',
            time: '12:45'
        },
            {
                record_id: 2,
                doctor: {
                    id: 1,
                    full_name: 'Samat Kanatov',
                    img: samatIMG
                },
                record_img: r2IMG,
                title: 'Anthrax',
                description: 'Cutaneous anthrax, also known as hide-porter\'s disease, is when anthrax occurs on the skin. It is the most common form (>90% of anthrax cases). It is the least dangerous form (low mortality with treatment, 23.7% mortality without).[20][5] Cutaneous anthrax presents as a boil-like skin lesion that eventually forms an ulcer with a black center (eschar). The black eschar often shows up as a large, painless, necrotic ulcer (beginning as an irritating and itchy skin lesion or blister that is dark and usually concentrated as a black dot, somewhat resembling bread mold) at the site of infection.',
                date: '23/04/2023',
                time: '15:55'
            },
            {
                record_id: 3,
                doctor: {
                    id: 2,
                    full_name: 'Darkhan Sansyzbai',
                    img: darkhanIMG
                },
                record_img: r3IMG,
                title: 'Marburg virus disease',
                description: 'Marburgviruses are endemic in arid woodlands of equatorial Africa.[11][12][13] Most marburgvirus infections were repeatedly associated with people visiting natural caves or working in mines. In 2009, the successful isolation of infectious MARV and RAVV was reported from healthy Egyptian fruit bat caught in caves.[4][14] This isolation strongly suggests that Old World fruit bats are involved in the natural maintenance of marburgviruses and that visiting bat-infested caves is a risk factor for acquiring marburgvirus infections.',
                date: '25/12/2022',
                time: '13:23'
            }
        ]
    },
    home: {
        doctors: [{
            id: 1,
            full_name: 'Samat Kanatov',
            specialization: 'Therapist',
            profile_img: samatIMG,
            address: 'Koshkarbaeva 15',
            city: 'Astana',
            experience: 3,
            rating: 4.2,
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse, facilis fuga, fugiat harum incidunt natus optio placeat quam, quibusdam repellendus reprehenderit soluta tenetur unde voluptatem. Ab dolorem esse et id illum inventore ipsum libero neque, odit quidem quis voluptas.",
            clinic_id: 3,
            contacts: {
                phone_number: "+7(707) 290 2692",
                email_address: 'wcatmull0@gmail.com',
                telegram: 'wcatmull0',
                instagram: 'wcatmull0',
            },
            reviews: [
                {
                    user_id: 5,
                    date: '13/12/2022',
                    time: '12:04',
                    rating: '3',
                    text: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
                },
                {
                    user_id: 4,
                    date: '13/02/2023',
                    time: '15:26',
                    rating: '5',
                    text: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
                },
                {
                    user_id: 6,
                    date: '28/01/2023',
                    time: '16:19',
                    rating: '4',
                    text: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
                },
            ]

        },
            {
                id: 2,
                full_name: 'Darkhan Sansyzbai',
                specialization: 'Allergy and immunology',
                profile_img: darkhanIMG,
                address: 'Saryarqa 17',
                city: 'Almaty',
                experience: 7,
                rating: 6.3,
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse, facilis fuga, fugiat harum incidunt natus optio placeat quam, quibusdam repellendus reprehenderit soluta tenetur unde voluptatem. Ab dolorem esse et id illum inventore ipsum libero neque, odit quidem quis voluptas.",
                clinic_id: 2,
                contacts: {
                    phone_number: "+7(707) 456 4565",
                    email_address: 'darkh@gmail.com',
                    telegram: 'darkh_san',
                    instagram: 'darkh_san',
                },
                reviews: [
                    {
                        user_id: 5,
                        date: '13/12/2022',
                        time: '12:04',
                        rating: '3',
                        text: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
                    },
                    {
                        user_id: 4,
                        date: '13/02/2023',
                        time: '15:26',
                        rating: '5',
                        text: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
                    },
                    {
                        user_id: 6,
                        date: '28/01/2023',
                        time: '16:19',
                        rating: '4',
                        text: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
                    },
                ]

            },
            {
                id: 3,
                full_name: 'Erbol Erkin',
                specialization: 'Dermatology',
                profile_img: erkinIMG,
                address: 'Janibek 262',
                city: 'Karagandy',
                experience: 9,
                rating: 9.3,
                about: "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
                clinic_id: 1,
                contacts: {
                    phone_number: "+7(775) 565 8521",
                    email_address: 'erbol_erkin@gmail.com',
                    telegram: 'erkin222',
                    instagram: 'erbol_erkin',
                },
                reviews: [
                    {
                        user_id: 5,
                        date: '13/12/2022',
                        time: '12:04',
                        rating: '3',
                        text: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
                    },
                    {
                        user_id: 4,
                        date: '13/02/2023',
                        time: '15:26',
                        rating: '5',
                        text: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
                    },
                    {
                        user_id: 6,
                        date: '28/01/2023',
                        time: '16:19',
                        rating: '4',
                        text: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
                    },
                ]

            }
        ],
        drugs: [{
            id: 1,
            name: 'Trypsin',
            description: "Pancreas of cattle. The enzyme is active at pH 5.0-8.0 with the optimum activity at pH 7.0. Trypsin is able to break down necrotic tissues and fibrous formations, thin viscous secrets and exudates. In relation to healthy tissues, the enzyme is inactive and safe due to the presence of trypsin inhibitors in them. It has a pronounced ability to cleave peptide bonds in a protein molecule, as well as high and low molecular weight protein breakdown products, especially bonds formed by aromatic amino acid residues (arginine, lysine). This mechanism determines its anti-inflammatory and anti-edematous effects, since inflammatory factors are complex proteins or high-molecular peptides (bradykinin, serotonin, necrotic products, etc.), which trypsin decomposes into simpler and less dangerous compounds. Does not affect the hemostasis system.",
            img: trypsin,
            start_price: 1300,
            end_price: 5300
        }, {
            id: 2,
            name: 'Aziobiot',
            description: "Pharmacokinetics Azithromycin is rapidly absorbed when taken orally, due to its acid stability and lipophilicity. After a single oral dose, 37% of azithromycin is absorbed and the peak plasma concentration (0.41 µg / ml) is recorded after 2-3 hours. Vd is approximately 31 l/kg. Azithromycin penetrates well into the respiratory tract, organs and tissues of the urogenital tract, the prostate gland, into the skin and soft tissues, reaching from 1 to 9 µg / ml, depending on the type of tissue.",
            img: aziobiot,
            start_price: 3600,
            end_price: 7850
        },
            {
                id: 3,
                name: 'Nozepam',
                description: "Oxazepam is rapidly and almost completely absorbed from the gastrointestinal tract and has a high protein binding (approximately 90%). There are reports that the half-life is in the range of 6-20 hours. Oxazepam is the main pharmacologically active metabolite of diazepam and is extensively metabolized to the inactive glucuronide. The maximum serum concentration is reached within 1-5 hours.",
                img: nopezam,
                start_price: 2600,
                end_price: 6400
            }
        ],
        clinics: [{
            id: 1,
            name: 'Green clinic',
            img: green,
            work_time: '9:00 - 18:00',
            work_days: 'Mon-Sat',
            city: 'Astana',
            address: 'Aktamberdi 16/2',
            rating: 9.6
        },
            {
                id: 2,
                name: 'Olimp Med',
                img: ansar,
                work_time: '08:00 - 19:00',
                work_days: 'Mon - Sat',
                city: 'Almaty',
                address: 'Toqtamys 97/1',
                rating: 8.4
            },
            {
                id: 3,
                name: 'MedHealth',
                img: medExpress,
                work_time: '07:00 - 15:00',
                work_days: 'Mon-Fri',
                city: 'Astana',
                address: 'Otyrar 76/2 B3',
                rating: 8.2
            }
        ],

        pharmacies: [{
            id: 1,
            name: 'Alphamed',
            img: 'https://i5.photo.2gis.com/images/branch/0/30258560067578801_4a78.jpg',
            work_time: '9:00 - 18:00',
            contacts: '+7-776-697-77-32',
            city: 'Astana',
            address: 'Prospek Mangilik el 17'
        },
            {
                id: 2,
                name: 'Da Signa',
                img: 'https://i4.photo.2gis.com/images/branch/0/30258560048820636_5203.jpg',
                work_time: '08:00 - 23:00',
                contacts: '+7 (7172) 25‒56‒27',
                city: 'Astana',
                address: 'St. Kordai 85'
            },
            {
                id: 3,
                name: 'A-Farm',
                img: 'https://i5.photo.2gis.com/images/branch/0/30258560067495755_0c98.jpg',
                work_time: '09:00 - 22:00',
                contacts: '+7‒776‒970‒69‒11',
                city: 'Astana',
                address: 'Aleikhan Bokeikhan 27/1'
            }
        ],
        patients: [
            {
                id: 1,
                full_name: 'Kairat Nurtas',
                profile_img: 'p1.img',
                phone: '8 (707) 999 3938',
                city: 'Astana',
                address: 'Samgau 5/2',
                records: [{
                    record_id: 1,
                    doctor_id: 2,
                    record_img: 'p1r1.img',
                    title: 'AIDS/HIV infection',
                    description: 'Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body\'s ability to fight infection and disease.\n' +
                        '\n' +
                        'HIV is a sexually transmitted infection (STI). It can also be spread by contact with infected blood and from illicit injection drug use or sharing needles. It can also be spread from mother to child during pregnancy, childbirth or breastfeeding. Without medication, it may take years before HIV weakens your immune system to the point that you have AIDS.',
                    date: '15/03/2023',
                    time: '12:45'
                },
                    {
                        record_id: 2,
                        doctor_id: 1,
                        record_img: 'p1r2.img',
                        title: 'Anthrax',
                        description: 'Cutaneous anthrax, also known as hide-porter\'s disease, is when anthrax occurs on the skin. It is the most common form (>90% of anthrax cases). It is the least dangerous form (low mortality with treatment, 23.7% mortality without).[20][5] Cutaneous anthrax presents as a boil-like skin lesion that eventually forms an ulcer with a black center (eschar). The black eschar often shows up as a large, painless, necrotic ulcer (beginning as an irritating and itchy skin lesion or blister that is dark and usually concentrated as a black dot, somewhat resembling bread mold) at the site of infection.',
                        date: '23/04/2023',
                        time: '15:55'
                    },
                    {
                        record_id: 3,
                        doctor_id: 2,
                        record_img: 'p1r3.img',
                        title: 'Marburg virus disease',
                        description: 'Marburgviruses are endemic in arid woodlands of equatorial Africa.[11][12][13] Most marburgvirus infections were repeatedly associated with people visiting natural caves or working in mines. In 2009, the successful isolation of infectious MARV and RAVV was reported from healthy Egyptian fruit bat caught in caves.[4][14] This isolation strongly suggests that Old World fruit bats are involved in the natural maintenance of marburgviruses and that visiting bat-infested caves is a risk factor for acquiring marburgvirus infections.',
                        date: '25/12/2022',
                        time: '13:23'
                    }
                ]
            }
        ],
    },
    notification: [
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: true,
            done: false
        },
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: false,
            done: false
        },
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: true,
            done: true
        },
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: true,
            done: true
        },
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: true,
            done: false
        }
        ,
        {
            title: 'Time to take medication',
            description: 'Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope.',
            time: '15:06',
            date: '22.02.2023',
            feedback: false,
            done: false
        }

    ],
    settings: {
        notifications: [
            {name: 'Drug time', checked: true},
            {name: 'About created records', checked: false},
            {name: 'Doctor recommends', checked: true},
            {name: 'Doctor\'s appointment time', checked: true},
            {name: 'About my plans', checked: true},
            {name: 'News and Updates', checked: false},
            {name: 'Reminders', checked: false}
        ],
        allows: [
            {name: 'Allow Sound', switch_name: 'allow_sound', switch: false},
            {name: 'Allow Vibration', switch_name: 'allow_vib', switch: true},
            {name: 'Email Notification', switch_name: 'email_note', switch: false},
            {name: 'Send message to phone number', switch_name: 'phone_note', switch: true},
            {name: 'Allow Adds', switch_name: 'allow_add', switch: false}
        ]
    }
}