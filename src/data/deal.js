import img1 from "./../assets/images/deal-01.jpg"
import img2 from "./../assets/images/deal-02.jpg"
import img3 from "./../assets/images/deal-03.jpg"

export const tabs = [
    'Appartment',
    'Villa House',
    'Penthhouse'
]

export const dealInfo = [
    {
        text: "Total flat space",
        value: "185 m2"
    },
    {
        text: "Floor number",
        value: "26th"
    },
    {
        text: "Number of rooms",
        value: "4"
    },
    {
        text: "Parking avaliable",
        value: "Yes"
    },
    {
        text: "Payment process",
        value: "Bank"
    }
]

export const bestDealsInfo = [
    {
        type: "Appartment",
        title: "Extra info about property",
        img: img1,
        info: {
            total_flat_space: "185 m2",
            floor_number: "26th",
            number_of_rooms: 4,
            parking_avaliable: "Yes",
            payment_process: "bank"
        }
    },
    {
        type: "Villa House",
        title: "Detail info about villa",
        img: img2,
        info: {
            total_flat_space: "250 m2",
            floor_number: "26th",
            number_of_rooms: 5,
            parking_avaliable: "Yes",
            payment_process: "bank"
        }
    },
    {
        type: "Penthhouse",
        title: " Extra info about Penthhouse",
        img: img3,
        info: {
            total_flat_space: "320 m2",
            floor_number: "34th",
            number_of_rooms: 6,
            parking_avaliable: "Yes",
            payment_process: "bank"
        }
    },
]